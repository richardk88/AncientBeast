(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{310:function(e,t,r){"use strict";r.r(t);var a=r(114),i=r(27),n=r(5),u=r(309),c=r(11);t.default=function(e){e.abilities[7]=[{trigger:"onOtherDamage",require:function(e){return!!this.testRequirements()&&(void 0===e&&(e={type:"target"}),!0)},activate:function(t,r){this.creature.id===t.attacker.id&&(r.addEffect(new u.a("Burning Spirit",this.creature,r,"",{alterations:{burn:-1}},e)),r.stats.burn-=1,this.isUpgraded()&&this.creature.addEffect(new u.a("Burning Heart",this.creature,this.creature,"",{alterations:{burn:1}},e)))}},{trigger:"onQuery",distance:3,_targetTeam:i.a.enemy,require:function(){return!!this.testRequirements()&&!!this.testDirection({team:this._targetTeam,distance:this.distance,sourceCreature:this.creature})},query:function(){var t=this,r=this.creature;this.isUpgraded()&&(this.distance=5),e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},flipped:r.player.flipped,team:this._targetTeam,id:this.creature.id,requireCreature:!0,x:r.x,y:r.y,distance:this.distance,sourceCreature:r})},activate:function(t,r){var i=this,n=c.d(t).creature,u=i.creature.sprite.scale.x>0?232:52,s=e.animations.projectile(this,n,"effects_fiery-touch",t,r,u,-20),o=s[0],d=s[1];o.onComplete.add((function(){var t=new a.a(i.creature,i.damages,1,[],e);n.takeDamage(t),i.end(),this.destroy()}),d)},getAnimationData:function(){return{duration:425}}},{trigger:"onQuery",range:6,require:function(){return this.testRequirements()},query:function(){var t=this,r=this.creature;r.queryMove({noPath:!0,isAbility:!0,range:e.grid.getFlyingRange(r.x,r.y,this.range,r.size,r.id),callback:function(e,r){e.x!=r.creature.x||e.y!=r.creature.y?(delete arguments[1],t.animation.apply(t,arguments)):t.query()}})},activate:function(t){var r=this;r.end(),this.isUpgraded()&&(this.range+=1),r.getTargets(r.creature.adjacentHexes(1)).forEach((function(e){e.target,n.a}));var i=function(t,i){var u=i;i instanceof n.a||(u=i.creature),u.takeDamage(new a.a(t.attacker,r.damages,1,[],e),{isFromTrap:!0}),this.trap.destroy(),t.deleteEffect()},c=function(){var e=this.trap.hex.creature,t=e&&e.type||null;return 0!==e&&t!==r.creature.type},s=this.creature;s.hexagons.forEach((function(t){t.createTrap("firewall",[new u.a("Firewall",s,t,"onStepIn",{requireFn:c,effectFn:i,attacker:s},e)],s.player,{turnLifetime:1,ownerCreature:s,fullTurnLifetime:!0})})),r.creature.moveTo(t,{ignoreMovementPoint:!0,ignorePath:!0,animation:"teleport",callback:function(){e.activeCreature.queryMove()}})}},{trigger:"onQuery",require:function(){return this.testRequirements()},query:function(){var t=this,r=this.creature.adjacentHexes(1);e.grid.queryHexes({fnOnConfirm:function(){t.animation.apply(t,arguments)},fnOnSelect:function(t){r.forEach((function(t){t.cleanOverlayVisualState(),t.overlayVisualState("creature selected player"+e.activeCreature.team)})),t.cleanOverlayVisualState(),t.overlayVisualState("creature selected player"+e.activeCreature.team)},id:this.creature.id,hexes:r,hideNonTarget:!0})},activate:function(){var t=this;t.end();var r=this.creature.adjacentHexes(1),i=t.getTargets(r);this.isUpgraded()&&(this.damages.burn=30),i.forEach((function(r){r.target.takeDamage(new a.a(t.creature,t.damages,1,[],e))}))}}]}}}]);