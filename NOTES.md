# NOTES

## Running mongodb wth docker

### MongoDB:

- Uses MongoDB 7.0 (latest stable version)
- Creates a root admin user with username `admin` and password `password123`
- Exposes port `27017` for direct database connections
- Includes persistent data storage with named volumes

### Mongo Express:

- Web-based MongoDB admin interface
- Accessible on port 8081 (http://localhost:8081)
- Automatically connects to the MongoDB container
- Basic authentication is disabled for easier access

### Usage:

- Run: `docker-compose up -d`
- Access Mongo Express at http://localhost:8081
Connect to MongoDB directly at `mongodb://admin:password123@localhost:27017`

### Key Features:

- **Persistent Storage**: Database data survives container restarts
- **Network Isolation**: Both services run on a dedicated Docker network
- **Auto-restart**: Containers restart automatically unless manually stopped
- **Dependencies**: Mongo Express waits for MongoDB to start