const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Plugins.Particles,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Mouse.Cnds.IsButtonDown,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Behaviors.Platform.Acts.SetGravity,
		C3.Plugins.Sprite.Acts.SetFlipped,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetPos
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{block: 0},
	{Platform: 0},
	{BoundToLayout: 0},
	{player: 0},
	{Keyboard: 0},
	{Mouse: 0},
	{checkpont: 0},
	{Text: 0},
	{spike: 0},
	{jumppad: 0},
	{jumppadparticles: 0},
	{gravitypad: 0},
	{gravitypadparticles: 0},
	{Text2: 0},
	{rb: 0},
	{lb: 0},
	{jb: 0},
	{Touch: 0}
];

self.InstanceType = {
	block: class extends self.ISpriteInstance {},
	player: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	checkpont: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	spike: class extends self.ISpriteInstance {},
	jumppad: class extends self.ISpriteInstance {},
	jumppadparticles: class extends self.IParticlesInstance {},
	gravitypad: class extends self.ISpriteInstance {},
	gravitypadparticles: class extends self.IParticlesInstance {},
	Text2: class extends self.ITextInstance {},
	rb: class extends self.ISpriteInstance {},
	lb: class extends self.ISpriteInstance {},
	jb: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {}
}