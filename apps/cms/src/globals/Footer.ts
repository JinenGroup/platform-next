import { GlobalConfig } from 'payload/types';

export const Footer: GlobalConfig = {
    slug: 'Footer',
    label: '>_ Pie de página',
    admin: {
        group: 'Admin',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'logos',
            label: 'Logos',
            type: 'array',
            fields: [
                {
                    name: 'logo',
                    label: 'Logo',
                    type: 'upload',
                    relationTo: 'media',
                    filterOptions: {
                        mimeType: { contains: 'image' },
                    },
                },
            ],
        },
        {
            name: 'sections',
            label: 'Secciones',
            type: 'array',
            fields: [
                {
                    name: 'section',
                    label: 'Sección',
                    type: 'group',
                    fields: [
                        {
                            name: 'title',
                            label: 'Título',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'links',
                            label: 'Enlaces',
                            type: 'array',
                            required: true,
                            fields: [
                                {
                                    name: 'caption',
                                    label: 'Texto',
                                    type: 'text',
                                },
                                {
                                    name: 'href',
                                    label: 'Enlace',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
