sudo apt update
sudo apt install nodejs
sudo apt install npm
curl https://sh.rustup.rs -sSf | sh -s -- -y
source $HOME/.cargo/env

git clone https://github.com/GreyJohnsonGit/grey_johnson_dev.git
cd grey_johnson_dev

cd client
npm i
npm run build
cd ../

cd server
cargo run --release