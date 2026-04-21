import { DynamicDrawUsage, InstancedBufferAttribute, InstancedMesh, MeshBasicMaterial, Object3D } from 'three';
import { scene } from '../core/renderer.js';
import { C } from '../constants.js';

const _dummy = new Object3D();

export function createParticlePool(geometry, materialOptions, count) {
  const material = new MeshBasicMaterial({
    color: C.white,
    transparent: true,
    opacity: 1,
    depthWrite: false,
    ...materialOptions
  });

  const iMesh = new InstancedMesh(geometry, material, count);
  iMesh.instanceMatrix.setUsage(DynamicDrawUsage);
  iMesh.instanceColor = new InstancedBufferAttribute(new Float32Array(count * 3), 3);
  iMesh.instanceColor.setUsage(DynamicDrawUsage);
  iMesh.count = count;
  iMesh.frustumCulled = false;
  scene.add(iMesh);

  _dummy.scale.setScalar(0);
  _dummy.position.set(0, -100, 0);
  _dummy.updateMatrix();
  for (let i = 0; i < count; i++) {
    iMesh.setMatrixAt(i, _dummy.matrix);
  }

  return { iMesh, count, needsColorUpdate: false };
}

export function hideParticle(pool, index) {
  _dummy.position.set(0, -100, 0);
  _dummy.scale.setScalar(0);
  _dummy.updateMatrix();
  pool.iMesh.setMatrixAt(index, _dummy.matrix);
}

export function finalizeFrame(pool) {
  pool.iMesh.instanceMatrix.needsUpdate = true;
  if (pool.needsColorUpdate) {
    pool.iMesh.instanceColor.needsUpdate = true;
    pool.needsColorUpdate = false;
  }
}

export { _dummy as dummy };
