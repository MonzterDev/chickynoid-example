interface ReplicatedFirst extends Instance {
	Chickynoid: ModuleScript & {
		Vendor: Folder & {
			QuickHull2: ModuleScript;
			TrianglePart: ModuleScript;
			FastSignal: ModuleScript;
			BitBuffer: ModuleScript;
			DeltaTable: ModuleScript;
		};
		Assets: Folder & {
			R15Rig: Model & {
				LeftLowerArm: MeshPart & {
					LeftElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftElbow: Motor6D;
					OriginalSize: Vector3Value;
					LeftWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LeftFoot: MeshPart & {
					OriginalSize: Vector3Value;
					LeftAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftAnkle: Motor6D;
				};
				RightHand: MeshPart & {
					RightWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightWrist: Motor6D;
					RightGripAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
				};
				HumanoidRootPart: Part & {
					RootRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
				};
				RightLowerLeg: MeshPart & {
					RightKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightKnee: Motor6D;
					OriginalSize: Vector3Value;
				};
				LeftUpperLeg: MeshPart & {
					OriginalSize: Vector3Value;
					LeftHip: Motor6D;
					LeftHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LeftLowerLeg: MeshPart & {
					OriginalSize: Vector3Value;
					LeftKnee: Motor6D;
					LeftAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LowerTorso: MeshPart & {
					WaistCenterAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					Root: Motor6D;
					RootRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					WaistRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistBackAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				Head: Part & {
					HatAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					NeckRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					FaceFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					face: Decal;
					HairAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					Neck: Motor6D;
					Mesh: SpecialMesh;
					FaceCenterAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				UpperTorso: MeshPart & {
					RightCollarAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					BodyBackAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					NeckRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftCollarAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					Waist: Motor6D;
					RightShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					BodyFrontAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					WaistRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					NeckAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LeftUpperArm: MeshPart & {
					LeftShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftShoulder: Motor6D;
					LeftShoulderAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					LeftElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
				};
				RightLowerArm: MeshPart & {
					RightWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					RightElbow: Motor6D;
					RightElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				LeftHand: MeshPart & {
					LeftWrist: Motor6D;
					LeftGripAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					LeftWristRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				Humanoid: Humanoid & {
					Animator: Animator & {
						Push: Animation;
						Idle: Animation;
						Jump: Animation;
						Fall: Animation;
						Run: Animation;
						Walk: Animation;
					};
				};
				RightUpperArm: MeshPart & {
					OriginalSize: Vector3Value;
					RightElbowRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightShoulderRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightShoulderAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightShoulder: Motor6D;
				};
				RightUpperLeg: MeshPart & {
					RightKneeRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					OriginalSize: Vector3Value;
					RightHip: Motor6D;
					RightHipRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
				};
				RightFoot: MeshPart & {
					RightAnkleRigAttachment: Attachment & {
						OriginalPosition: Vector3Value;
					};
					RightAnkle: Motor6D;
					OriginalSize: Vector3Value;
				};
			};
			Effects: Folder & {
				ImpactBody: Part;
				RocketShoot: Part;
				ImpactWorld: Part & {
					Bullet_sound_6: Sound;
				};
				Tracer: Part & {
					Sparks: ParticleEmitter;
					["M9 FIRE"]: Sound;
				};
				ImpactPlayer: Part & {
					Core: ParticleEmitter;
					Bullet_sound_6: Sound;
				};
			};
		};
		Shared: Folder & {
			Command: ModuleScript;
			Enums: ModuleScript;
		};
		Enums: ModuleScript;
		Types: ModuleScript;
		Client: ModuleScript & {
			CharacterModel: ModuleScript;
			WeaponsClient: ModuleScript;
			Effects: ModuleScript;
			ClientMods: ModuleScript;
			NetGraph: ModuleScript & {
				NetGraph: ScreenGui & {
					Frame: Frame & {
						Warning: TextLabel;
						Points: Frame;
						FpsText: TextLabel;
					};
				};
			};
			FpsGraph: ModuleScript & {
				FpsGraph: ScreenGui & {
					Frame: Frame & {
						["60"]: TextLabel;
						Warning: TextLabel;
						["144"]: TextLabel;
						["60fps"]: Frame;
						["30fps"]: Frame;
						["144fps"]: Frame;
						Points: Frame;
						FpsText: TextLabel;
						["30"]: TextLabel;
					};
				};
			};
			ClientChickynoid: ModuleScript;
		};
		Simulation: ModuleScript & {
			CharacterData: ModuleScript;
			CollisionModule: ModuleScript;
			MathUtils: ModuleScript;
			TerrainCollision: ModuleScript;
			MinkowskiSumInstance: ModuleScript;
			TrajectoryModule: ModuleScript;
		};
		Server: ModuleScript & {
			ServerMods: ModuleScript;
			WeaponsServer: ModuleScript;
			ServerChickynoid: ModuleScript;
			Antilag: ModuleScript;
		};
	};
	Examples: Folder & {
		ClientMods: Folder & {
			GenerateCommand: ModuleScript;
			ClientFastProjectiles: ModuleScript;
			NetgraphHotkeys: ModuleScript;
		};
		Weapons: Folder & {
			Machinegun: ModuleScript;
			ProjectileSniper: ModuleScript;
		};
		Characters: Folder & {
			NicerHumanoid: ModuleScript;
			utils: Folder & {
				MoveTypeFlying: ModuleScript;
				MoveTypeWalking: ModuleScript;
			};
			HumanoidChickynoid: ModuleScript;
		};
	};
	Packages: Folder & {
		Chickynoid: Folder & {
			types: Folder & {
				Simulation: Folder;
				Client: Folder & {
					WeaponsClient: Folder;
				};
				Shared: Folder & {
					Command: ModuleScript;
				};
				Server: Folder;
			};
			src: ModuleScript & {
				Assets: Folder & {
					R15Rig: Model & {
						LeftLowerArm: MeshPart & {
							LeftElbowRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							LeftElbow: Motor6D;
							OriginalSize: Vector3Value;
							LeftWristRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
						};
						LeftFoot: MeshPart & {
							OriginalSize: Vector3Value;
							LeftAnkleRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							LeftAnkle: Motor6D;
						};
						RightHand: MeshPart & {
							RightWristRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							RightWrist: Motor6D;
							RightGripAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							OriginalSize: Vector3Value;
						};
						HumanoidRootPart: Part & {
							RootRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							OriginalSize: Vector3Value;
						};
						RightLowerLeg: MeshPart & {
							RightKneeRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							RightAnkleRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							RightKnee: Motor6D;
							OriginalSize: Vector3Value;
						};
						LeftUpperLeg: MeshPart & {
							OriginalSize: Vector3Value;
							LeftHip: Motor6D;
							LeftHipRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							LeftKneeRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
						};
						LeftLowerLeg: MeshPart & {
							OriginalSize: Vector3Value;
							LeftKnee: Motor6D;
							LeftAnkleRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							LeftKneeRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
						};
						LowerTorso: MeshPart & {
							WaistCenterAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							LeftHipRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							Root: Motor6D;
							RootRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							RightHipRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							OriginalSize: Vector3Value;
							WaistRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							WaistBackAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							WaistFrontAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
						};
						Head: Part & {
							HatAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							OriginalSize: Vector3Value;
							NeckRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							FaceFrontAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							face: Decal;
							HairAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							Neck: Motor6D;
							Mesh: SpecialMesh;
							FaceCenterAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
						};
						UpperTorso: MeshPart & {
							RightCollarAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							BodyBackAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							NeckRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							LeftCollarAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							OriginalSize: Vector3Value;
							Waist: Motor6D;
							RightShoulderRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							BodyFrontAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							WaistRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							LeftShoulderRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							NeckAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
						};
						LeftUpperArm: MeshPart & {
							LeftShoulderRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							LeftShoulder: Motor6D;
							LeftShoulderAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							LeftElbowRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							OriginalSize: Vector3Value;
						};
						RightLowerArm: MeshPart & {
							RightWristRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							OriginalSize: Vector3Value;
							RightElbow: Motor6D;
							RightElbowRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
						};
						LeftHand: MeshPart & {
							LeftWrist: Motor6D;
							LeftGripAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							OriginalSize: Vector3Value;
							LeftWristRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
						};
						Humanoid: Humanoid & {
							Animator: Animator & {
								Push: Animation;
								Idle: Animation;
								Jump: Animation;
								Fall: Animation;
								Run: Animation;
								Walk: Animation;
							};
						};
						RightUpperArm: MeshPart & {
							OriginalSize: Vector3Value;
							RightElbowRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							RightShoulderRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							RightShoulderAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							RightShoulder: Motor6D;
						};
						RightUpperLeg: MeshPart & {
							RightKneeRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							OriginalSize: Vector3Value;
							RightHip: Motor6D;
							RightHipRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
						};
						RightFoot: MeshPart & {
							RightAnkleRigAttachment: Attachment & {
								OriginalPosition: Vector3Value;
							};
							RightAnkle: Motor6D;
							OriginalSize: Vector3Value;
						};
					};
					Effects: Folder & {
						ImpactBody: Part;
						RocketShoot: Part;
						ImpactWorld: Part & {
							Bullet_sound_6: Sound;
						};
						Tracer: Part & {
							Sparks: ParticleEmitter;
							["M9 FIRE"]: Sound;
						};
						ImpactPlayer: Part & {
							Core: ParticleEmitter;
							Bullet_sound_6: Sound;
						};
					};
				};
				Vendor: Folder & {
					QuickHull2: ModuleScript;
					TrianglePart: ModuleScript;
					FastSignal: ModuleScript;
					BitBuffer: ModuleScript;
					DeltaTable: ModuleScript;
				};
				Enums: ModuleScript;
				Types: ModuleScript;
				Client: ModuleScript & {
					CharacterModel: ModuleScript;
					WeaponsClient: ModuleScript;
					Effects: ModuleScript;
					ClientMods: ModuleScript;
					NetGraph: ModuleScript & {
						NetGraph: ScreenGui & {
							Frame: Frame & {
								Warning: TextLabel;
								Points: Frame;
								FpsText: TextLabel;
							};
						};
					};
					FpsGraph: ModuleScript & {
						FpsGraph: ScreenGui & {
							Frame: Frame & {
								["60"]: TextLabel;
								Warning: TextLabel;
								["144"]: TextLabel;
								["60fps"]: Frame;
								["30fps"]: Frame;
								["144fps"]: Frame;
								Points: Frame;
								FpsText: TextLabel;
								["30"]: TextLabel;
							};
						};
					};
					ClientChickynoid: ModuleScript;
				};
				Simulation: ModuleScript & {
					CharacterData: ModuleScript;
					CollisionModule: ModuleScript;
					MathUtils: ModuleScript;
					TerrainCollision: ModuleScript;
					MinkowskiSumInstance: ModuleScript;
					TrajectoryModule: ModuleScript;
				};
				Server: ModuleScript & {
					ServerMods: ModuleScript;
					WeaponsServer: ModuleScript;
					ServerChickynoid: ModuleScript;
					Antilag: ModuleScript;
				};
			};
		};
	};
}
