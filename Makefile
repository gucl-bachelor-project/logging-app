setup:
	docker volume create nodemodules

install:
	docker-compose -f docker-compose.builder.yml run --rm install

dev:
	$(MAKE) setup
	$(MAKE) install
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml build
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

prod-build:
	docker build -t 468374654130.dkr.ecr.eu-central-1.amazonaws.com/bproject-logging-app:latest -f ./Dockerfile-prod .

prod-push:
	echo $$(aws ecr get-login-password) | docker login --password-stdin --username AWS 468374654130.dkr.ecr.eu-central-1.amazonaws.com
	aws s3 cp docker-compose.yml s3://bproject-app-docker-composes/logging/docker-compose.yml
	aws s3 cp docker-compose.prod.yml s3://bproject-app-docker-composes/logging/docker-compose.prod.yml
	docker push 468374654130.dkr.ecr.eu-central-1.amazonaws.com/bproject-logging-app
