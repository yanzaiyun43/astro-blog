---
title: "LanChat-Android：写一个不联网也能用的局域网聊天 App"
description: "不需要服务器、不需要账号、不需要互联网，只要在同一个 Wi-Fi 下就能多人聊天、传文件。"
publishedAt: 2026-09-12
category: "项目介绍"
tags: ["Android", "Java", "局域网", "Socket", "开源"]
featured: false
slug: lanchat-android-intro
---

> 项目地址：https://github.com/yanzaiyun43/LanChat-Android

很多时候不需要微信、钉钉这些大家伙。办公室传个文件、宿舍几个人聊天、没网的时候还想通信——人在同一个局域网里，缺的只是一个轻量工具。

所以就写了 LanChat-Android。

## 功能

同一个 Wi-Fi 下，一台手机开服务端，其他人扫描自动加入。

- 多人聊天，服务端广播模式
- 文本消息实时收发，每条带「复制」按钮
- 文件传输，自动存到 `/storage/emulated/0/局域网聊天/`
- 局域网扫描发现服务端，点击自动连接
- 自定义昵称
- 前台服务保活，后台不掉线
- 本机 IP 和端口显示在界面顶部

没有登录页，没有引导页，打开就用。

## 用法

1. 一方点「开启服务端」
2. 其他人点「扫描」，选发现的服务端连接
3. 输昵称，发消息或发文件
4. 收到的消息点「复制」就行

## 协议

很简单的二进制协议，一个字节表示类型：

| 类型 | 值 | 说明 |
|------|-----|------|
| 文本 | `0x01` | 文本消息 |
| 文件 | `0x02` | 文件传输 |
| 系统 | `0x03` | 加入/离开通知 |
| 昵称 | `0x04` | 昵称注册 |

够用就行，以后加功能再说。

## 权限

- `INTERNET` / `ACCESS_NETWORK_STATE`：局域网通信
- `FOREGROUND_SERVICE` / `FOREGROUND_SERVICE_DATA_SYNC`：保活，Android 14 不声明 `dataSync` 会崩
- `MANAGE_EXTERNAL_STORAGE`：存文件到公共目录

> Android 11+ 要手动去「设置 → 应用 → 权限 → 所有文件访问」开启，不然文件存到应用私有目录。

## 下载

GitHub Actions 自动构建：

- push 到 `main`：Actions 页面下 debug 产物
- 创建 `v*` 标签：自动发 Release 带 APK

本地构建：

```bash
git clone https://github.com/yanzaiyun43/LanChat-Android.git
cd LanChat-Android
./gradlew assembleDebug
```

技术栈：Java + Android SDK（minSdk 24, targetSdk 34）、Gradle 8.5 + AGP 8.2.0。

## 版本记录

| 版本 | 重点 |
|------|------|
| 1.0 | 基础 1 对 1 聊天 |
| 1.1 | 多人聊天、昵称、服务端/客户端切换、IP 置顶、图标替换 |
| 1.2 | 修复文件 race condition、文件存公开目录、前台服务保活 |
| 1.3 | 修复 Android 14 FGS `dataSync` 崩溃 |
| 1.4 | 局域网扫描发现服务端、自动跳转权限页面 |
| 1.5 | 扫描发现的服务端点击自动连接 |
| 1.6 | 每条消息右侧加「复制」按钮 |

先跑通主流程，再补体验，最后做系统适配。

## 后续

可能会加蓝牙协议聊天，但还不确定，蓝牙和 Wi-Fi 通信模型差别挺大，得想清楚再说。

项目还在更新，有想法可以提 Issue。
