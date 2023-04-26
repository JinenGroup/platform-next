import { Block } from 'payload/types';

const ImageBlock: Block = {
    slug: 'Image',
    labels: {
        singular: 'Image',
        plural: 'Images',
    },
    fields: [
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            filterOptions: {
                mimeType: { contains: 'image' },
            },
        },
    ],
};

export default ImageBlock;
