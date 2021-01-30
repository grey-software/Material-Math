FROM gitpod/workspace-full

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

RUN mkdir -p /app
COPY package.json *yarn* /app/
WORKDIR /app
RUN yarn setup

WORKDIR /

COPY . /app

WORKDIR /app

CMD [ "yarn", "dev" ]

