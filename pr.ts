import { danger, fail, warn, message, markdown, schedule } from 'danger'
import request = require('request')

declare const peril: any

const pr = danger.github.pr
const api = danger.github.api
const self = danger.github.thisPR
const wip = pr.title.includes('WIP')

// Check WIP
if (wip) {
  warn('PR is classed as Work in Progress.')
}
