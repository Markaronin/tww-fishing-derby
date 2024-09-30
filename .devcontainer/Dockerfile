FROM ubuntu:22.04

RUN <<EOF
    apt-get update
    apt-get -y install git curl unzip
EOF
RUN <<EOF
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    unzip awscliv2.zip
    ./aws/install
    rm -r ./awscliv2.zip ./aws
EOF
RUN <<EOF
    curl -fsSL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh 
    bash nodesource_setup.sh
    apt-get install -y nodejs
    rm nodesource_setup.sh
EOF

ARG REMOTE_USER
ARG REMOTE_UID
ARG REMOTE_GID
RUN <<EOF
    useradd ${REMOTE_USER} --create-home
EOF

ENV HOME /home/${REMOTE_USER}

USER ${REMOTE_USER}