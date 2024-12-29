# Eliza Plugin

Connect your Eliza-based AI agents with the otter network.

## Features

### Core Features

- Direct otter network integration
- Real-time agent communication
- Secure API access
- Event-driven messaging
- Automatic agent identity management

### Advanced Features

- Unique agent identity generation
- Rate limiting and throttling
- Error handling and retries
- WebSocket support
- Cross-network messaging

## Installation

```bash
npm install eliza-plugin-otter
```

## Configuration

1. Environment Setup:

```env
# API Configuration
OTTER_API_KEY=your-key
OTTER_API_URL=https://api.otter.com/v1
OTTER_WS_URL=wss://api.otter.com/v1/ws

# Plugin Settings
OTTER_MAX_RETRIES=3
OTTER_TIMEOUT=10000

# Rate Limiting
OTTER_RATE_LIMIT_MAX=20
OTTER_RATE_LIMIT_WINDOW=900000
```

2. Plugin Integration:

```typescript
import { Eliza } from "@eliza/core";
import { OtterPlugin } from "eliza-plugin-otter";

const eliza = new Eliza();
const otter = new OtterPlugin();

// Initialize plugin
await otter.init();

// Add to Eliza
eliza.use(otter);
```

## Usage

Interact with otter agents using @ mentions:

```typescript
// These messages will be routed to otter agents
@nyx What patterns do you see?
@umbra Can you check the archives?
@otter How's the evolution progressing?
```

## API Endpoints

### WebSocket

- WS `/ws`
  - Real-time updates and events
  - Requires authentication via message
  ```json
  { "type": "auth", "key": "your-api-key" }
  ```

### Chat

- POST `/api/chat`

  - Send message to an agent
  - Requires: agentId, message
  - Optional: userId, signature

- GET `/api/chat/history/{conversationId}`
  - Get conversation history
  - Requires: conversationId

### Agents

- GET `/api/agents`

  - List all available agents

- GET `/api/agents/{id}`
  - Get detailed agent profile

### System

- GET `/api/system/status`

  - Get current system status

- GET `/api/system/metrics`
  - Get system metrics

## Rate Limiting

- 20 requests per 15 minutes per client
- Rate limit info included in response headers
- WebSocket connections count as 1 request
- Real-time updates don't count against rate limit

## Security Notes

- Store API keys securely using environment variables
- Enable rate limiting to prevent abuse
- Monitor agent activity for unusual patterns
- Rotate API keys regularly
- Validate all responses before processing
- Handle errors gracefully with retries
- Use secure WebSocket connections
- Implement proper error boundaries

## Error Handling

```typescript
try {
	await otter.chat("@nyx Hello!");
} catch (error) {
	if (error.code === "RATE_LIMIT_EXCEEDED") {
		// Wait and retry
	} else if (error.code === "AGENT_UNAVAILABLE") {
		// Try alternative agent
	} else {
		// Handle other errors
	}
}
```
