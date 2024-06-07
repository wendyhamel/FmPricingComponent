window.component = function () {
    return {
        plans : [
            {
                id: 'plan1',
                name: 'Basic',
                priceMonthly : 19.99,
                priceYearly : 199.99,
                specifications: [{id: 'plan1spec1', name: '500 GB Storage'}, {id: 'plan1spec2', name: '2 Users Allowed'}, {id: 'plan1spec3', name: 'Send up to 3 GB'}],
                featured: false
            },
            {
                id: 'plan2',
                name: 'Professional',
                priceMonthly : 24.99,
                priceYearly : 249.99,
                specifications: [{id: 'plan2spec1', name: '1 TB Storage'}, {id: 'plan2spec2', name: '5 Users Allowed'}, {id: 'plan2spec3', name: 'Send up to 10 GB'}],
                featured: true
            },
            {
                id: 'plan3',
                name: 'Master',
                priceMonthly : 39.99,
                priceYearly : 399.99,
                specifications: [{id: 'plan3spec1', name: '2 TB Storage'}, {id: 'plan3spec2', name: '10 Users Allowed'}, {id: 'plan3spec3', name: 'Send up to 20 GB'}],
                featured: false
            }],
        billingMonthly: false,
    }
}