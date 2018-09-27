import fs from 'fs';
import path from 'path';
import contentful from 'contentful';

const SPACE = process.env.CONTENTFUL_SPACE;
const TOKEN = process.env.CONTENTFUL_TOKEN;

const client = contentful.createClient({
  space: SPACE,
  accessToken: TOKEN
})

const types = [
'user'
]

export const getcontent = async () => {
  console.log('> Starting import...')
  for (const type of types) {
    console.log('> Getting content for', type)
    const entries = await client.getEntries({
      content_type: type,
      include: 3
    })
    if (entries.total === 1) {
      const { fields } = entries.items[0]
      fs.writeFileSync(
        path.join(path.resolve(), 'data', `${type}.json`),
        JSON.stringify(fields)
      )
      console.log('> Content gotten and written for', type)
    }
  }
  return true
}

getcontent();

