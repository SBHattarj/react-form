FROM gitpod/workspace-full

ENV N_PREFIX="/home/gitpod/.n"

RUN npm i n -g
