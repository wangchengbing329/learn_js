##  项目要经过开发测试上线
env cross-env  配置环境
这些环境是在不同的机器上的 运维 
一键发布我们的项目 容器 

-OS linux  mysql moogodb 
独立起来 应用之间没有影响， 共享动力，数据存储 
机器的性能 VMWare 
测试服务器  
- 运维，发布 更简单 前端可以利用docker 
-  微服务架构 
 端口 
 - Dockerfile 文件 
 FROM  拉取镜像来到本地 跨机器安装时很方便
 WORKDIR /app 设置镜像中的镜像目录
 COPY package.json /app 拷贝文件
 RUN npm install 安装node 包
 COPY . /app 
 EXPOSE  8081 暴露端口8081
 CMD node index.js 运行


 - 根据Dockerfile 构建镜像 
 docker build -t image-name . 
 docker images 
 docker container run -p 1234:8081 first-docker-node



-  docker

