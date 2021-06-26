sudo apt update
sudo apt install nodejs
sudo apt install npm

git clone https://github.com/GreyJohnsonGit/grey_johnson_dev.git
cd grey_johnson_dev

cd client
npm i
npm run build
cd ../

cd server
cargo run