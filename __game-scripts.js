var ButtonLogic=pc.createScript("buttonLogic");ButtonLogic.attributes.add("textEntity",{type:"entity",description:"The entity that we want to update when the button is clicked"}),ButtonLogic.attributes.add("description",{type:"string"});let i=0;ButtonLogic.prototype.initialize=function(){this.entity.button.on("click",(function(t){this.textEntity.element.text=this.description+" "+i++
 console.log("Testing button click");
}
),this)};
