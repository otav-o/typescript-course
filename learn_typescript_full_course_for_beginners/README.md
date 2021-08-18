# Learn TypeScript - Full Course for Beginners

Alexander Kochergin Youtube course https://www.youtube.com/MonsterlessonsAcademy



## Notes

- `npm install -g typescript-language-server`

- `npx tsc -v`

- Typescript files cant be executed in browser

- `npx tsc main.ts`

  - generates a js file (transpiled to js ES3 - works in every browser)
  - that's why const and let become var after generation

- `npx tsc main.ts -w`

- **ts.config.json**

  - ```json
    {
      "compilerOptions": {
        "rootDir": "./src",
        "outDir": "./dist",
      }
    }
    ```

  - ![image-20210817164330328](README.assets/image-20210817164330328.png)

  - `npx tsc -w`

