import { ConventionalChangelog } from 'conventional-changelog'

const generator = new ConventionalChangelog()
  .readPackage()

generator
  .writeStream()
  .pipe(process.stdout)

// or

// for await (const chunk of generator.write()) {
//   console.log(chunk)
// }