import { Block } from 'payload/types';

export const Media: Block = {
    slug: 'media',
    fields: [
        {
            type: 'upload',
            name: 'media',
            label: 'Multimedia',
            relationTo: 'media',
            required: true,
            admin: {
                description:
                    'Tamaño máximo de carga de archivo: 12MB. El tamaño recomendado para las imágenes es < 500KB',
            },
        },
    ],
};
