# Strong Charts

## The Idea

![Screen Shot 2022-04-07 at 21 15 10](https://user-images.githubusercontent.com/58401630/162280211-9161dfbd-4370-4ce9-bbdc-a4213b5959fa.png)

### Example dataset

- [strong-2018.csv](https://github.com/sitek94/strong-charts/files/8456477/strong-2018.csv)

### Todos

- [x] Weekly aggreagtion
- [x] Connect dots in Scatter Chart
- [ ] Select a date from when you want to start showing the data
- [x] Persist the data in localStorage

### Ideas

- Display exercises in a [SvelTable](https://sveltable.io/)
- Support file drop for uploading a file - [filedrop-svelte](https://github.com/chanced/filedrop-svelte)
- Take a look at [persistent-svelte-store](https://github.com/omer-g/persistent-svelte-store/blob/master/persistentStore.ts)
  when adding more persistent stuff

## Bootstrapped with create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
