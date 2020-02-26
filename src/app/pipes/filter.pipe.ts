import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    args = args[0].toLocaleLowerCase();
    //console.log(args)
    const resultPosts = [];    
    for(const post of value){            
      if(post.titulo.toLocaleLowerCase().indexOf(args) > -1){
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }

}
