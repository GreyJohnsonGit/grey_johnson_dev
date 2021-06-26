# Run as Super User
apt update
apt install nodejs
apt install npm
curl https://sh.rustup.rs -sSf | sh -s -- -y
source $HOME/.cargo/env

/sbin/iptables -t nat -I PREROUTING --src 0/0 --dst 0/0 -p tcp --dport 80 -j REDIRECT --to-ports 3030

git clone https://github.com/GreyJohnsonGit/grey_johnson_dev.git
cd grey_johnson_dev

cd client
npm i
npm run build
cd ../

cd server
cargo run --release