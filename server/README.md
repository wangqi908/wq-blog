## admin-server(后台)

### 技术栈

| 名称     | 说明     |
| :------- | :------- |
| node     | node     |
| express  | express  |
| mongodb  | mongodb  |
| mongoose | mongoose |

### 插件

| 名称            | 说明         |
| :-------------- | :----------- |
| blueimp-md5     | 转 md5       |
| jsonwebtoken    | 生成 token   |
| multer          | 文件上传     |
| express-session | 生成 session |
| svg-captcha     | 生成验证码   |

### 功能

```
- 登录 / 注销

- 权限管理
  - 用户管理
  - 角色管理
  - 权限管理

- 图片上传

```

### 开发

```
# 克隆项目
git clone https://github.com/wangqi908/vue-admin-template.git

# 安装依赖
npm install

# 启动服务
npm start

# BaseUrl
http://localhost:3000/api/
```

### 接口文档

#### 登录模块

##### 验证码

**请求 URL：**

- `/captcha`

**请求方式：**

- GET

##### 登录

**请求 URL：**

- `/login`

**请求方式：**

- POST

**参数：**

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |

**请求示例**

```json
{
  "username": "wq123",
  "password": "qwer1234"
}
```

##### 注册

**请求 URL：**

- `/register`

**请求方式：**

- POST

**参数：**

| 参数名   | 必选 | 类型   | 说明     |
| :------- | :--- | :----- | -------- |
| username | 是   | string | 用户名   |
| password | 是   | string | 密码     |
| avatar   | 否   | string | 头像路径 |

**请求示例**

```json
{
  "username": "admin",
  "password": "admin",
  "avatar": "temp_files/15774273399250.jpeg"
}
```

##### 文件上传

**请求 URL：**

- `/upload`

**请求方式：**

- POST

**参数：**

| 参数名 | 必选 | 类型 | 说明     |
| :----- | :--- | :--- | -------- |
| file   | 是   | File | 表单文件 |

**返回示例**

```json
{
  "code": 200,
  "data": {
    "http": "http://192.168.10.78:3000/",
    "fileList": ["temp_files/15774276227190.gif"]
  }
}
```

#### 百度智能模块

##### 文字识别

**请求 URL：**

- `/bdAi/ocr`

**请求方式：**

- POST

**参数：**

| 参数名 | 必选 | 类型   | 说明            |
| :----- | :--- | :----- | --------------- |
| image  | 是   | base64 | base64 格式图片 |

**请求示例**

```json
{
  "image": "iVBORw0KGgoAK5CYII="
}
```

#### 用户模块

##### 用户新增

**请求 URL：**

- `/user/add`

**请求方式：**

- POST

**参数：**

| 参数名   | 必选 | 类型   | 说明     |
| :------- | :--- | :----- | -------- |
| username | 是   | string | 用户名   |
| password | 是   | string | 密码     |
| remark   | 否   | string | 备注     |
| avatar   | 否   | string | 头像路径 |

**请求示例**

```json
{
  "username": "admin",
  "password": "admin",
  "remark": "备注"
}
```

##### 用户删除

**请求 URL：**

- `/user/remove`

**请求方式：**

- POST

**参数：**

| 参数名 | 必选 | 类型  | 说明     |
| :----- | :--- | :---- | -------- |
| ids    | 是   | array | 用户 ids |

**请求示例**

```json
{
  "ids": ["5de47d1ed438e32b94ecaa50"]
}
```

##### 用户修改

**请求 URL：**

- `/user/remove`

**请求方式：**

- POST

**参数：**

| 参数名   | 必选 | 类型   | 说明     |
| :------- | :--- | :----- | -------- |
| id       | 是   | string | 用户 id  |
| username | 否   | string | 用户名   |
| password | 否   | string | 密码     |
| remark   | 否   | string | 备注     |
| avatar   | 否   | string | 头像路径 |

**请求示例**

```json
{
  "_id": "5df18c599ddebf0e40dc54e9",
  "remark": "备注11",
  "username": "admin",
  "password": "admin",
  "remark": "备注"
}
```

##### 用户查询

**请求 URL：**

- `/user/view`

**请求方式：**

- POST

**参数：**

| 参数名 | 必选 | 类型   | 说明    |
| :----- | :--- | :----- | ------- |
| id     | 是   | string | 用户 id |

**请求示例**

```json
{
  "_id": "5df2004bec325c348c6675a0"
}
```

##### 用户分页

**请求 URL：**

- `/user/page`

**请求方式：**

- POST

**参数：**

| 参数名   | 必选 | 类型   | 说明         |
| :------- | :--- | :----- | ------------ |
| pageSize | 是   | number | 每页返回条数 |
| pageNum  | 是   | number | 页码         |

**请求示例**

```json
{
  "pageSize": 4,
  "pageNum": 0,
  "data": {}
}
```

##### 获取个人信息

**请求 URL：**

- `/user/info`

**请求方式：**

- GET
