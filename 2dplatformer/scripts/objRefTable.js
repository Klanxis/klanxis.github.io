const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Flash,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.OnMove,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.AddVar
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Solid: 0},
	{Tilemap: 0},
	{Flash: 0},
	{PlayerAnim: 0},
	{Flight: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{PlayerBox: 0},
	{Keyboard: 0},
	{state: 0},
	{Enemy: 0},
	{EdgeMarker: 0},
	{Sine: 0},
	{Pickup: 0},
	{txtScore: 0},
	{Score: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Tilemap: class extends self.ITilemapInstance {},
	PlayerAnim: class extends self.ISpriteInstance {},
	PlayerBox: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Enemy: class extends self.ISpriteInstance {},
	EdgeMarker: class extends self.ISpriteInstance {},
	Pickup: class extends self.ISpriteInstance {},
	txtScore: class extends self.ITextInstance {}
}