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

- Interfaces

  - Creating objects

  - There is no entity in JS

  - ```typescript
    interface UserInterface { // or IUser
      name: String,
      age: number,
      email?: String, // non-mandatory property
      getMessage(): string,
    }
    
    const user3: UserInterface = {
      name: "Jack",
      age: 30,
      getMessage() {
        return "Hello " + name;
      }
    }
    
    console.log(user3.getMessage());
    ```

  - ```typescript
    const user: {name: string, age: number} = {
      name: "Otávio",
      age: 20,
    }
    ```

- Union & Type alias

  - Union

    - Operator to combine types. One type OR another.

    - ```ts
      let errorMessage:  string | null = null;
      
      let newUser: UserInterface2 | null = null;
      
      let someProp: string | number | null | undefined | string[] | object; // bad code
      ```

  - Type aliases

    - Types and Interfaces always start with capital letter  

    
