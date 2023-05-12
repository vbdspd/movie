import cinema from '../../pages/cinema/cinema'

export default {
    path: '/cinema',
    component: cinema,
    children: [
        {
            path: 'localCity',
            component: () => import('../../components/LocalCity/LocalCity')
        },
        {
            path: 'brand',
            component: () => import('../../components/Brand/Brand')
        },
        {
            path: 'select',
            component: () => import('../../components/Select/Select')
        }

    ]
}