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
	$$(aws2 ecr get-login --no-include-email --region eu-central-1)
	aws2 s3 cp docker-compose.yml s3://gkc-bproject-app-docker-composes/logging/docker-compose.yml
	aws2 s3 cp docker-compose.prod.yml s3://gkc-bproject-app-docker-composes/logging/docker-compose.prod.yml
	docker push 468374654130.dkr.ecr.eu-central-1.amazonaws.com/bproject-logging-app
