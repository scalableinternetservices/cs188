module "mysql" {
  source = "./modules/mysql"
}

# module "redis" {
#   source = "./modules/redis"
# }

resource "aws_ecs_cluster" "cs188" {
  name = "cs188"
}

resource "aws_ecr_repository" "cs188" {
  name                 = "cs188"
  image_tag_mutability = "MUTABLE"
}

module "webserver" {
  source = "./modules/appserver"

  appserver_tag  = "app-web"
  ecr_repository = aws_ecr_repository.cs188.repository_url
  ecs_cluster    = aws_ecs_cluster.cs188.id

  mysql_host = module.mysql.host
  # redis_host = module.redis.host

  services      = "BACKGROUND"
  honeycomb_key = "d29d5f5ec24178320dae437383480737"

  ws_url = module.websocket_api.url
}

module "rest_api" {
  source         = "./modules/rest_api"
  appserver_host = module.webserver.host
}

module "websocket_api" {
  source         = "./modules/websocket_api"
  appserver_host = module.webserver.host
}

module "lambda" {
  source = "./modules/lambda"

  honeycomb_key = "d29d5f5ec24178320dae437383480737"

  mysql_host = module.mysql.host
  # redis_host = module.redis.host
}
