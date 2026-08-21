const test = require('node:test');
const assert = require('node:assert');
const { MonitorHandler } = require('../src/features/feature-monitor-1.js');

test('monitor regression guard ' + '1', async () => {
 const result = await new MonitorHandler({ retries: 1 }).run('sample-1');
 assert.strictEqual(result.ok, true);
});