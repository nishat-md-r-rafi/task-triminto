import React from 'react'
import { categories } from '../assets/data';
import { TreeFolder } from './TreeFolder';
import { SingleBar } from './SingleBar';


export const TreeView = () => {
    const makeTree = (data, parentIdentifier, parent) => {
        let newData = [];
        data?.filter((d) => d[parentIdentifier] === parent) //filter child of same parent
            .forEach(item => {
                let newItem = item;
                // if child also has children property push a new tree of children
                if (newItem.hasOwnProperty("children")) {
                    newItem.children.push(makeTree(data, parentIdentifier, item.id))   
                } 
                // else make property children of the item
                else {
                    newItem.children = makeTree(data, parentIdentifier, item.id)
                }

                newData.push(newItem);
            });
        return newData;
    }

    const treeData = makeTree(categories, "parentId", null);
    // console.log(treeData)

    const renderTree = (data) => {  
        return data?.map((item) => {
          if (item?.children?.length > 0) {
            return (
                <TreeFolder 
                key={item.id} 
                id={item.id}
                name={item.name}
                children={renderTree(item.children)}
                />
            ) 
          } else {
            return ( 
                <SingleBar key={item.name} data={item}/>
            )
          }
        });
    }

  return (
    <div>
        {renderTree(treeData)}
    </div>
  )
}
