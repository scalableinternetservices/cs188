import { loadTest } from './loadtest/runner'

console.log('STARTING!')

loadTest().catch(err => console.error(err))
