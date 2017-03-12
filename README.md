# react-ad-block-detect
A React component that renders its children if an ad blocker is detected

[![npm version](https://img.shields.io/npm/v/react-ad-block-detect.svg?style=flat)](https://www.npmjs.com/package/react-ad-block-detect)
[![Travis Build Status](https://travis-ci.org/grxy/react-ad-block-detect.svg?branch=master)](https://travis-ci.org/grxy/react-ad-block-detect)
[![Circle Build Status](https://circleci.com/gh/grxy/react-ad-block-detect.svg?style=shield)](https://circleci.com/gh/grxy/react-ad-block-detect)
[![Coverage Status](https://coveralls.io/repos/github/grxy/react-ad-block-detect/badge.svg?branch=master)](https://coveralls.io/github/grxy/react-ad-block-detect?branch=master)
[![dependencies Status](https://david-dm.org/grxy/react-ad-block-detect/status.svg)](https://david-dm.org/grxy/react-ad-block-detect)
[![devDependencies Status](https://david-dm.org/grxy/react-ad-block-detect/dev-status.svg)](https://david-dm.org/grxy/react-ad-block-detect?type=dev)

## Installation

    npm install react-ad-block-detect

## Usage

    import React, { Component } from 'react';
    import AdBlockDetect from 'react-ad-block-detect';

    class MyComponent extends Component {
        render() {
            return (
                <AdBlockDetect>
                    <p>Show this if an ad blocker has been enabled.</p>
                </AdBlockDetect>
            );
        }
    }
