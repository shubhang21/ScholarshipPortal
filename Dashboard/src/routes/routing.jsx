
// ui components
import React from 'react'
import StudentList from '../views/ui-components/StudentList';


var ThemeRoutes=
  [
    { 
      path: '/dashboard', 
      name: 'Dashboard', 
      icon: 'ti-loop', 
      
    }
    ,
 
    {
      path:`/1`,
      name: 'TMA-PAI-ENGINEERING',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={1} />
       
    },
    {
      path:`/2`,
      name: 'TMA-PAI-MERIT',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={2} />
      },
    {
      path:`/3`,
      name: 'RAJASTHAN MERIT',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={3} />
      },
    {
      path:`/4`,
      name: 'LOCAL REGION (UG)',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={4} />
      },
    {
      path:`/5`,
      name: 'SIBLING (UG)',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={5} />
      },
    {
      path:`/6`,
      name: 'DIFFERENTLY-ABLED',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={6} />
      },
    {
      path:`/7`,
      name: 'SINGLE MOTHER (UG)',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={7} />
      },
    {
      path:`/8`,    
      name: 'ORPHAN (UG)',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={8} />
    },
     
       {
        path:`/9`,
      name: 'MUJ GRADUATE',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={9} />
      },
   
    {
      path:`/10`,
      name: 'LOCAL (PG)',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={10} />
      },
    {
      path:`/11` ,
       name: 'TSB(MBA)',
       icon: 'mdi mdi-apps',
       component:<StudentList  id={11} />
    },
       
       {
        path:`/12`,
      name: 'MERIT (PG)',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={12} />
      },
    {
      path:`/13`,
      name: 'SCHOLORSHIPS (PHD)',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={13} />
      },
   
    {
      path:`/14`,
      name: 'SPORT (UG)',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={14} />
      },
    {
      path:`/15`,
      name: 'SPORT (PG)',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={15} />
      },
    {
      path:`/16`,
      name: 'HIGH SEM(UG)',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={16} />
      },
    {
      path:`/17`,
      name: 'HIGH SEM(PG)',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={17} />
      },
    {
      path:`/18`,
      name: 'STAFF CHILD',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={18} />
      },
    {
      path:`/19`,
      name: 'SEM/CONF. (PG)',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={19} />
      },
    {
      path:`/20`,
      name: 'SEM/CONF. (UG)',
      icon: 'mdi mdi-apps',
      component:<StudentList  id={20} />
      },
      
      
  ]




// var ThemeRoutes = scholarships.map((item)=>{
//   path:`/${item.id}`,
//   name:{item.name},
//   component:<StudentList  id={item.id} />
// })

export default ThemeRoutes;
