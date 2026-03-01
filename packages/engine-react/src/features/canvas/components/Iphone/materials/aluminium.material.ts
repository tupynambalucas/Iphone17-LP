import { PRODUCT_COLORS } from '@iphone17pro-lp/engine-core';
import { MeshPhysicalNodeMaterial } from 'three/webgpu';
import { color, float, positionLocal, mx_noise_float, add, mul, bumpMap } from 'three/tsl';

export const AluminumMaterial = new MeshPhysicalNodeMaterial({
  name: 'M_Aluminium',
  metalness: 1.0,
  roughness: 0.45,
  clearcoat: 0.5,
  clearcoatRoughness: 0.0,
});

const grainScale = float(1500.0);

const grainPos = positionLocal.mul(grainScale);

const grainNoise = mx_noise_float(grainPos);

AluminumMaterial.colorNode = color(PRODUCT_COLORS.pink);

AluminumMaterial.roughnessNode = add(0.4, mul(grainNoise, 0.15));

const bumpIntensity = float(0.0015);
AluminumMaterial.normalNode = bumpMap(grainNoise, bumpIntensity);

AluminumMaterial.metalnessNode = add(0.95, mul(grainNoise, 0.05));
