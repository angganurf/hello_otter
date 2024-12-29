# SYMBaiEX

I'm just an artist, without a team, and without an influencer. This meme only depends on trust, mentality, heart and belief. Don't go bankrupt because of gambling, just build trust in 1 coin then the community builds it together, you enter at the beginning.

## Overview

SYMBaiEX is a comprehensive platform that enables deep integration between human operators and AI agents through:

- Modern terminal interface with real-time interactions
- Multi-provider AI support with seamless switching
- Autonomous agent behaviors and pattern analysis
- Cross-network communication protocols
- Advanced symbiotic features

## Core Components

### 1. Client Terminal

A powerful terminal interface for direct network interaction:

- Multi-provider AI support
- Real-time chat capabilities
- Command history and completion
- Advanced pattern recognition
- Conversation logging

### 2. Eliza Plugin

Connect your Eliza-based AI agents with autonomous behaviors:

- Direct network integration
- Autonomous monitoring and analysis
- Pattern detection
- Cross-network messaging
- Identity management

## Features

### AI Integration

Multiple provider support with optimized configurations:

- **Galadriel**
  - Models: llama3.1:13b (Normal), llama3.1:70b (Large)
  - Features: Optimized inference, low latency
- **OpenAI**
  - Models: gpt-4-turbo-preview (Normal), gpt-4-vision-preview (Large)
  - Features: Advanced reasoning, vision capabilities
- **Anthropic**
  - Models: claude-3-sonnet (Normal), claude-3-opus (Large)
  - Features: Nuanced responses, long context
- **Heuristic**
  - Models: mixtral-8x7b (Normal), mixtral-8x7b-instruct (Large)
  - Features: Efficient processing, domain expertise
- **Ollama**
  - Models: hermes3:3b (Normal), hermes3:7b (Large)
  - Features: Local deployment, privacy focused

### Autonomous Behaviors

- Network monitoring and analysis
- Pattern detection and response
- Autonomous agent interactions
- System health monitoring
- Anomaly detection
- Cross-agent communication

### Terminal Features

- Command history with up/down navigation
- Tab completion for commands
- Real-time response streaming
- Error handling and recovery
- Rate limiting protection
- Session management
- Conversation logging

## Installation

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Setup

1. Clone the repository:

```bash
git clone https://github.com/SYMBaiEX/SYMBaiEX
cd SYMBaiEX
```

2. Install dependencies:

```bash
pnpm install
```

3. Configure environment:
   Create a `.env` file:

```env
# Default Provider
VITE_AI_PROVIDER=ollama  # galadriel, openai, anthropic, heuristic, ollama

# Model Selection
VITE_NORMAL_MODEL=hermes3:3b  # Default model
VITE_LARGE_MODEL=hermes3:7b   # Complex tasks

# Provider API Keys (if using)
VITE_GALADRIEL_API_KEY=your-key
VITE_OPENAI_API_KEY=your-key
VITE_ANTHROPIC_API_KEY=your-key
VITE_HEURISTIC_API_KEY=your-key

# Ollama Configuration (for local deployment)
VITE_OLLAMA_HOST=http://localhost:11434

# Terminal Configuration
VITE_TERMINAL_HISTORY_SIZE=100
VITE_TERMINAL_MAX_OUTPUT=1000

# Rate Limiting
VITE_RATE_LIMIT_MAX_REQUESTS=20
VITE_RATE_LIMIT_WINDOW_MS=900000  # 15 minutes
```

4. Start development server:

```bash
pnpm run dev
```

## Usage

### Basic Commands

```bash
# Show available commands
help

# Clear terminal
clear

# Show system status
status

# Start chat session
chat

# View character profiles
list
```

### Chat Features

1. Direct Messaging

```bash
# Chat with default agent
Hello, how are you?

# Chat with specific agent
@nyx What patterns do you see?
@umbra Can you check the archives?
```

2. Command History

- Use Up/Down arrows to navigate history
- History persists across sessions

3. Auto-completion

- Tab to complete commands
- Double-tab to show available options

### Advanced Features

1. System Commands

```bash
# Detailed system status
otter status -v

# Network scan
otter scan network

# View logs
otter logs
```

2. Profile Management

```bash
# List all profiles
otter list

# View specific profile
otter view nyx

# Set active chat agent
otter chat umbra
```

3. API Integration

```bash
# Generate API key
otter api generate

# View API status
otter api info

# Renew API key
otter api renew
```

## Development

### Project Structure

```
SYMBaiEX/
├── client-terminal/    # Terminal interface
├── plugin-symbaiex/    # Eliza plugin
├── docs/              # Documentation
└── src/              # Core components
```

### Building

1. Development build:

```bash
pnpm run dev
```

2. Production build:

```bash
pnpm run build
```

3. Preview production:

```bash
pnpm run preview
```

## Security

### Best Practices

1. API Key Management

   - Store keys in environment variables
   - Rotate keys regularly
   - Never commit keys to version control

2. Rate Limiting

   - Configure appropriate limits
   - Monitor usage patterns
   - Implement backoff strategies

3. Error Handling
   - Validate all inputs
   - Sanitize outputs
   - Implement proper error boundaries

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain test coverage
- Document new features
- Keep components focused and reusable

## License

MIT License
