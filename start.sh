# Run as Super User
apt update

# Frontend Build Tools
apt install nodejs
apt install npm

# Rust
curl https://sh.rustup.rs -sSf | sh -s -- -y
source $HOME/.cargo/env

# Caddy Server
apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo apt-key add -
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
apt install caddy
caddy reverse-proxy --from greyjohnson.dev --to localhost:3030

# Download Repo
git clone https://github.com/GreyJohnsonGit/grey_johnson_dev.git
cd grey_johnson_dev

# Install Packages and Build Frontend
cd client
npm i
npm run build
cd ../

# Build and Run Backend
cd server
cargo run --release