# Base image for consistency
FROM node:20-alpine AS base
# Stage 1: Install dependencies using yarn
FROM node:20-alpine AS deps

# Install necessary packages
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package.json and yarn.lock to leverage Docker cache
COPY package.json yarn.lock ./

# Install all dependencies using yarn
RUN yarn install --frozen-lockfile

# Stage 2: Build the app using yarn
FROM base AS builder
WORKDIR /app

# Copy node_modules from deps stage and app source code
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the project
RUN yarn build

# Stage 3: Prepare runner image for production
FROM base AS runner
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

# Copy the public folder and Next.js build output from builder
COPY --from=builder /app/public ./public

# Ensure .next directory exists with proper ownership
RUN mkdir .next && chown nextjs:nodejs .next

# Copy the necessary Next.js build output to the final image
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user for security
USER nextjs

# Expose port 3000 to allow connections
EXPOSE 3000

# Start the Next.js application
CMD ["node", "server.js"]
