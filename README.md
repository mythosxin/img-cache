Cache sensitive images and convert them to base64.

## Usage

```
yarn add @byted/img-cache
```

you can use `import { imageLoader } from '@byted/img-cache';` to get this function.

```
import { imageLoader } from '@byted/img-cache';

// imgList: [{ticket_url: xxx, file_id: 'xxx'}]
axios().then(({imgList}) => {
  Promise.all(imgList.map(async (el) => {
    const res = await imageLoader(el.ticket_url, el.file_id);
    return {
      ticket_url: res,
      file_id: el.file_id,
    };
  })).then((...res) => {
    this.imgList = res[0];
  });
})

```

## Note

The imageLoader requires a unique key as the ID of the image.