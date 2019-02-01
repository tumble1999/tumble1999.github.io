@echo off
title Web Server
cd..
:start
bundle exec jekyll s --verbose
goto :start
