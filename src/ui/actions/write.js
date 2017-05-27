import * as writeAPI from '../../server/write'
import { updateState } from 'redux-jetpack'

export async function write(haiku) {
  const results = await writeAPI.write(haiku)
}
