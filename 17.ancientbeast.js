(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{327:function(e,t,i){"use strict";i.r(t);var r=i(39),a=i.n(r),n=i(44),c=i.n(n),s=(i(0),i(114)),d=i(27),u=i(45),o=i(11),g=i(5),h=i(309);t.default=function(e){e.abilities[6]=[{trigger:"onCreatureSummon onOtherCreatureSummon onOtherCreatureDeath",_buff:0,require:function(){if(this.creature.dead||this.creature.temp)return!1;var t=0;return e.creatures.forEach((function(e){"S"!=e.realm||e.dead||e.temp||(t+=2)})),t!=this._buff&&(this._buff=t,!0)},activate:function(){this.creature.facePlayerDefault();var t=0;this.isUpgraded()&&(t=this._buff),this.creature.replaceEffect(new h.a("Lamellar Body",this.creature,this.creature,"",{alterations:{defense:this._buff,frost:this._buff,regrowth:t},stackable:!1},e))}},{trigger:"onQuery",_directions:[0,1,0,0,1,0],_targetTeam:d.a.enemy,require:function(){if(!this.testRequirements())return!1;if(!this.atLeastOneTarget(this.creature.getHexMap(u.j),{team:this._targetTeam})){if(!this.isUpgraded())return!1;if(!this.testDirection({team:this._targetTeam,directions:this._directions,distance:this.creature.remainingMove+1,sourceCreature:this.creature}))return!1}return!0},query:function(){var t=this,i=this.creature,r=c()({fnOnConfirm:function(){t.animation.apply(t,arguments)},flipped:i.flipped,id:i.id,hexesDashed:i.getHexMap(u.j),team:d.a.enemy,requireCreature:!0},"flipped",i.flipped);if(r.choices=i.getHexMap(u.j).map((function(e){return[e]})),this.isUpgraded()){var n=e.grid.getDirectionChoices({flipped:i.flipped,sourceCreature:i,team:this._targetTeam,id:i.id,requireCreature:!0,x:i.x,y:i.y,distance:i.remainingMove+1,directions:this._directions});r.choices=r.choices.filter((function(e){return!n.choices.some((function(t){return e.every((function(e){return t.includes(e)}))}))})),r.choices=[].concat(a()(r.choices),a()(n.choices)),n.choices.forEach((function(t){var n=t[0].direction,c=1;(!i.flipped&&4===n||i.flipped&&1===n)&&(c=-1*i.size);var s=e.grid.getHexLine(i.x+c,i.y,t[0].direction,i.flipped);s.splice(0,t.length),s.splice(t.length-o.d(t).creature.size),r.hexesDashed=[].concat(a()(r.hexesDashed),a()(s))}))}e.grid.queryChoice(r)},activate:function(t,i){var r=this.creature;this.end();var a=o.d(t).creature,n=a.health<=39?{pure:this.damages.pure}:{crush:this.damages.crush,frost:this.damages.frost},c=new s.a(this.creature,n,1,[],e);if(r.getHexMap(u.j).includes(o.d(t)))a.takeDamage(c);else{if(!this.isUpgraded())return;o.b(t,!1,!0,r.id);var d=o.d(t),g=d.x+(4===i.direction?r.size-1:0);d=e.grid.hexes[d.y][g];var h=1;(!r.flipped&&4===i.direction||r.flipped&&1===i.direction)&&(h=-1*r.size);var f=e.grid.getHexLine(r.x+h,r.y,i.direction,r.flipped);f.splice(0,t.length+a.size),f.splice(t.length),r.moveTo(d,{callback:function(){for(var t=null,i=0;i<f.length&&f[i].isWalkable(a.size,a.id,!0);i++)t=f[i];null!==t?a.moveTo(t,{callback:function(){t.creature===a&&a.takeDamage(c),e.activeCreature.queryMove()},ignoreMovementPoint:!0,ignorePath:!0,animation:"push"}):(a.takeDamage(c),e.activeCreature.queryMove())}})}}},{trigger:"onQuery",_targetTeam:d.a.enemy,require:function(){if(!this.testRequirements())return!1;var t=u.q,i=u.d,r=this.creature,a=o.b(e.grid.getHexMap(r.x+2,r.y-2,0,!1,t),!0,!0,r.id,r.team).concat(o.b(e.grid.getHexMap(r.x+1,r.y-2,0,!1,i),!0,!0,r.id,r.team),o.b(e.grid.getHexMap(r.x,r.y,0,!1,t),!0,!0,r.id,r.team),o.b(e.grid.getHexMap(r.x+1,r.y,0,!1,i),!0,!0,r.id,r.team),o.b(e.grid.getHexMap(r.x+2,r.y+2,0,!1,t),!0,!0,r.id,r.team),o.b(e.grid.getHexMap(r.x-2,r.y-2,2,!0,t),!0,!0,r.id,r.team),o.b(e.grid.getHexMap(r.x-1,r.y-2,2,!0,i),!0,!0,r.id,r.team),o.b(e.grid.getHexMap(r.x,r.y,2,!0,t),!0,!0,r.id,r.team),o.b(e.grid.getHexMap(r.x-1,r.y,2,!0,i),!0,!0,r.id,r.team),o.b(e.grid.getHexMap(r.x-2,r.y+2,2,!0,t),!0,!0,r.id,r.team));return!!this.atLeastOneTarget(a,{team:this._targetTeam})},query:function(){var t=this,i=this.creature,r=[o.b(e.grid.getHexMap(i.x+2,i.y-2,0,!1,u.q),!0,!0,i.id,i.team).concat(o.b(e.grid.getHexMap(i.x+1,i.y-2,0,!1,u.d),!0,!0,i.id,i.team),o.b(e.grid.getHexMap(i.x,i.y,0,!1,u.q),!0,!0,i.id,i.team),o.b(e.grid.getHexMap(i.x+1,i.y,0,!1,u.d),!0,!0,i.id,i.team),o.b(e.grid.getHexMap(i.x+2,i.y+2,0,!1,u.q),!0,!0,i.id,i.team)),o.b(e.grid.getHexMap(i.x-2,i.y-2,2,!0,u.q),!0,!0,i.id,i.team).concat(o.b(e.grid.getHexMap(i.x-1,i.y-2,2,!0,u.d),!0,!0,i.id,i.team),o.b(e.grid.getHexMap(i.x,i.y,2,!0,u.q),!0,!0,i.id,i.team),o.b(e.grid.getHexMap(i.x-1,i.y,2,!0,u.d),!0,!0,i.id,i.team),o.b(e.grid.getHexMap(i.x-2,i.y+2,2,!0,u.q),!0,!0,i.id,i.team))];e.grid.queryChoice({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,requireCreature:1,id:i.id,flipped:i.flipped,choices:r})},activate:function(t){for(var i=[],r=0;r<t.length;r++)t[r].creature instanceof g.a&&-1==i.indexOf(t[r].creature)&&(t[r].creature.takeDamage(new s.a(this.creature,this.damages1,1,[],e)),i.push(t[r].creature))}},{trigger:"onQuery",directions:[0,1,0,0,1,0],_targetTeam:d.a.enemy,require:function(){return!!this.testRequirements()&&!!this.testDirection({team:this._targetTeam,directions:this.directions,sourceCreature:this.creature})},query:function(){var t=this,i=this.creature;e.grid.queryDirection({fnOnSelect:function(i){var r=o.d(i).creature,a=t.creature.player.flipped?e.grid.hexes[o.d(i).y][o.d(i).x+r.size-1]:o.d(i);a.adjacentHex(t.radius).concat([a]).forEach((function(t){t.creature instanceof g.a?t.overlayVisualState("creature selected player"+t.creature.team):t.overlayVisualState("creature selected player"+e.activeCreature.team)}))},fnOnConfirm:function(){t.animation.apply(t,arguments)},flipped:i.player.flipped,team:this._targetTeam,id:this.creature.id,requireCreature:!0,x:i.x,y:i.y,sourceCreature:i})},activate:function(t){this.end();var i=o.d(t).creature,r=this.creature.player.flipped?e.grid.hexes[o.d(t).y][o.d(t).x+i.size-1]:o.d(t),a=this.getTargets(r.adjacentHex(this.radius).concat([r])),n=new h.a("Frozen",this.creature,void 0,"",{effectFn:function(e){e.target.stats.frozen=!0,this.deleteEffect()}},e);this.areaDamage(this.creature,this.damages,[n],a)}}]}}}]);