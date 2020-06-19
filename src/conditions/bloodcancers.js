export default {
  name: 'Haematological Malignancies',
  conditions: [
    {
      name: 'CLL',
      markers: [
        { name: 'CD19' },
        { name: 'CD20', note: 'variable' },
        { name: 'CD22', note: 'weak' },
        { name: 'CD79b', note: 'weak' },
        { name: 'CD5', note: 'weak', color: 'green' },
        { name: 'CD23', color: 'dodgerblue' },
        { name: 'CD43', color: 'dodgerblue' },
        { name: 'CD200', note: 'strong', color: 'dodgerblue' }
      ]
    },
    {
      name: 'Lympho-plasmacytic Lymphoma',
      markers: [
        { name: 'CD19', note: 'often strong' },
        { name: 'CD20' },
        { name: 'CD22' },
        { name: 'CD79b' },
        { name: 'CD27', color: 'dodgerblue' },
        { name: 'CD52', color: 'dodgerblue' },
        { name: 'CD79a', color: 'dodgerblue' },
        { name: 'SmIg', color: 'dodgerblue' }
      ]
    },
    {
      name: 'Marginal zone lymphoma',
      markers: [
        { name: 'CD19' },
        { name: 'CD20' },
        { name: 'CD22' },
        { name: 'CD79b' },
        { name: 'SmIg', color: 'dodgerblue' },
        { name: 'CD200', color: 'dodgerblue'},
        { name: 'CD11c', note: '+/-', color: 'dodgerblue' },
        { name: 'CD23', note: '+/-', color: 'dodgerblue' },
        { name: 'CD25', note: '+/-', color: 'dodgerblue' },
        { name: 'CD5', note: '+/-', color: 'green' },
      ]
    },
    {
      name: 'Mantle cell lymphoma',
      markers: [
        { name: 'CD19' },
        { name: 'CD20', note: 'moderate' },
        { name: 'CD22' },
        { name: 'CD79b' },
        { name: 'SmIg', color: 'dodgerblue' },
        { name: 'FMC7', color: 'dodgerblue'},
        { name: 'CD5', note: 'strong', color: 'green' },
        { name: 'CD23', negative: true, color: 'red' },
      ]
    },
    {
      name: 'Follicular lymphoma',
      markers: [
        { name: 'CD19', note: 'often weak' },
        { name: 'CD20', note: 'strong' },
        { name: 'CD22' },
        { name: 'CD79b' },
        { name: 'SmIg', color: 'dodgerblue' },
        { name: 'FMC7', color: 'dodgerblue'},
        { name: 'CD10', color: 'dodgerblue'},
        { name: 'CD43', negative: true, color: 'red' },
      ]
    },
    {
      name: 'T-LGL',
      markers: [
        { name: 'CD2', color: 'green' },
        { name: 'CD3', color: 'green' },
        { name: 'CD5', note: 'often lost', color: 'green' },
        { name: 'CD7', note: 'often lost', color: 'green' },
        { name: 'CD8', color: 'green' },
        { name: 'CD57', color: 'orange' },
      ]
    },
    {
      name: 'DLBCL',
      markers: [
        { name: 'CD19' },
        { name: 'CD20' },
        { name: 'CD22' },
        { name: 'CD10', color: 'dodgerblue'},
        { name: 'CD79a', color: 'dodgerblue'},
        { name: 'PAX5', color: 'dodgerblue'},
      ]
    },
    {
      name: 'B-cell pro-lymphocytic leukaemia',
      markers: [
        { name: 'CD19' },
        { name: 'CD20' },
        { name: 'CD22' },
        { name: 'CD79b' },
        { name: 'SmIg', color: 'dodgerblue' },
        { name: 'FMC7', color: 'dodgerblue'},
        { name: 'CD5', note: '+/-', color: 'green' },
      ]
    },
    {
      name: 'T-cell pro-lymphocytic leukaemia',
      markers: [
        { name: 'CD2', color: 'green' },
        { name: 'CD3', color: 'green' },
        { name: 'CD5', color: 'green' },
        { name: 'CD7', note: 'very strong', color: 'green' },
        { name: 'CD8', note: '+/-', color: 'green' },
        { name: 'Some dual CD4/CD8+', color: 'green' },
      ]
    },
    {
      name: 'Myeloma',
      markers: [
        { name: 'CD38', color: 'orange' },
        { name: 'CD138', color: 'orange' },
        { name: 'CD56', color: 'orange' },
        { name: 'CD200', color: 'dodgerblue'},
        { name: 'CD10', note: '+/-', color: 'dodgerblue'},
        { name: 'CD20', note: '+/-'},
        { name: 'CD19', negative: true, color: 'red' },
      ]
    },
    {
      name: 'Plasma cell leukaemia',
      markers: [
        { name: 'CD38', color: 'orange' },
        { name: 'CD138', color: 'orange' },
        { name: 'CD200', color: 'dodgerblue'},
        { name: 'CD10', note: '+/-', color: 'dodgerblue'},
        { name: 'CD20' },
        { name: 'CD56', negative: true, color: 'red' },
      ]
    },
    {
      name: 'Sezary Syndrome',
      markers: [
        { name: 'CD2', color: 'green' },
        { name: 'CD3', color: 'green' },
        { name: 'CD4', color: 'green' },
        { name: 'CD5', color: 'green' },
        { name: 'CD7', note: 'lost/weak', color: 'green' },
      ]
    },
    {
      name: 'Hairy cell leukaemia',
      markers: [
        { name: 'CD19' },
        { name: 'CD20' },
        { name: 'CD22' },
        { name: 'CD79b' },
        { name: 'SmIg', color: 'dodgerblue' },
        { name: 'FMC7', color: 'dodgerblue'},
        { name: 'CD11c', color: 'dodgerblue' },
        { name: 'CD25', color: 'dodgerblue'},
        { name: 'CD103', color: 'dodgerblue' },
        { name: 'CD123', color: 'dodgerblue'},
      ]
    },
    {
      name: 'Hairy cell leukaemia variant',
      markers: [
        { name: 'CD19' },
        { name: 'CD20' },
        { name: 'CD22' },
        { name: 'CD79b' },
        { name: 'SmIg', color: 'dodgerblue' },
        { name: 'FMC7', color: 'dodgerblue'},
        { name: 'CD11c', note: '+/-', color: 'dodgerblue' },
        { name: 'CD103', color: 'dodgerblue' },
        { name: 'CD200', color: 'dodgerblue'},
        { name: 'CD25', negative: true, color: 'red'},
      ]
    },
    {
      name: 'T-ALL',
      markers: [
        { name: 'TdT', color: 'hotpink' },
        { name: 'CD34', color: 'hotpink' },
        { name: 'CD2', color: 'green' },
        { name: 'cyt CD3', note: 'surface CD3 -ve', color: 'green' },
        { name: 'CD5', color: 'green' },
        { name: 'CD7', color: 'green' },
        { name: 'CD4/8', note: 'often dual', color: 'green' },
        { name: 'CD99', color: 'green' },
      ]
    },
    {
      name: 'B-ALL',
      markers: [
        { name: 'TdT', color: 'hotpink' },
        { name: 'CD34', color: 'hotpink' },
        { name: 'CD19' },
        { name: 'CD22' },
        { name: 'CD79a', color: 'dodgerblue' },
        { name: 'CD10', note: '+/-', color: 'dodgerblue' },
        { name: 'Often CD20 -ve' },
      ]
    },
    {
      name: 'AML - Active megakaryoblastic leukaemia',
      markers: [
        { name: 'CD13', color: 'hotpink' },
        { name: 'CD33', color: 'hotpink' },
        { name: 'CD34', color: 'hotpink' },
        { name: 'CD41', color: 'teal' },
        { name: 'CD61', color: 'teal' },
        { name: 'CD42b', color: 'teal' },
      ]
    },
    {
      name: 'AML - Pure erythroid leukaemia',
      markers: [
        { name: 'CD13', color: 'hotpink' },
        { name: 'CD33', color: 'hotpink' },
        { name: 'CD34', color: 'hotpink' },
        { name: 'CD117', color: 'hotpink' },
        { name: 'CD36', color: 'teal' },
        { name: 'CD71', color: 'teal' },
        { name: 'CD235a', color: 'teal' },
      ]
    },
    {
      name: 'AML - Monocytic differentiation',
      markers: [
        { name: 'CD13', color: 'hotpink' },
        { name: 'CD33', color: 'hotpink' },
        { name: 'CD34', color: 'hotpink' },
        { name: 'CD117', color: 'hotpink' },
        { name: 'CD4', note: 'weak', color: '#6c6' },
        { name: 'CD11c', color: 'teal' },
        { name: 'CD11b', color: 'teal' },
        { name: 'CD14', note: 'variable', color: 'teal' },
        { name: 'CD15', color: 'teal' },
        { name: 'CD36', color: 'teal' },
        { name: 'CD64', color: 'teal' },
        { name: 'CD65', color: 'teal' },
      ]
    },
    {
      name: 'AML - NOS',
      markers: [
        { name: 'HLA-DR', color: 'hotpink' },
        { name: 'CD13', color: 'hotpink' },
        { name: 'CD33', color: 'hotpink' },
        { name: 'CD34', color: 'hotpink' },
        { name: 'CD117', color: 'hotpink' },
        { name: 'myeloperoxidase', color: 'hotpink' },
      ]
    },
    {
      name: 'Acute Promyelocytic leukaemia',
      markers: [
        { name: 'CD13', color: 'hotpink' },
        { name: 'CD33', note: 'strong homogenous', color: 'hotpink' },
        { name: 'CD117', color: 'hotpink' },
        { name: 'CD9', note: 'strong', color: 'teal' },
        { name: 'CD15', color: 'teal' },
        { name: 'CD64', color: 'teal' },
        { name: 'CD34/HLA-DR',  negative: true, color: 'red' },
      ]
    },
    {
      name: 'Burkitt Lymphoma',
      markers: [
        { name: 'CD19' },
        { name: 'CD20' },
        { name: 'CD22', note: 'weak' },
        { name: 'SmIg', note: 'strong',  color: 'dodgerblue' },
        { name: 'CD10', color: 'teal' },
        { name: 'CD43', color: 'teal' },
        { name: 'CD81',  note: 'strong', color: 'teal' },
      ]
    },
    {
      name: 'Blastic plasmacytoid dendritic cell neopasm',
      markers: [
        { name: 'CD4', color: 'green' },
        { name: 'CD56', color: 'orange' },
        { name: 'CD123', color: 'orange' },
        { name: 'CD303', color: 'orange' }
      ]
    },
    {
      name: 'Acute T-Cell leukaemia/lymphoma',
      markers: [
        { name: 'CD2', color: 'green' },
        { name: 'CD3', color: 'green' },
        { name: 'CD4', color: 'green' },
        { name: 'CD5', color: 'green' },
        { name: 'CD25', color: 'dodgerblue' },
        { name: 'CD7', negative: true, color: 'red'  }
      ]
    },
  ]
}
