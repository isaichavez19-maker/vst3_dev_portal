import hashlib
import os

def solidify_artifact(file_path):
    """Calculates and returns the SHA-256 hash of a file."""
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Artifact not found at {file_path}")

    hasher = hashlib.sha256()
    with open(file_path, 'rb') as f:
        buf = f.read()
        hasher.update(buf)

    return hasher.hexdigest()

def verify_integrity(file_path, expected_hash):
    """Verifies the integrity of a file against an expected SHA-256 hash."""
    actual_hash = solidify_artifact(file_path)
    return actual_hash == expected_hash

if __name__ == "__main__":
    # This is the "Secreto" - the immutable hash of our sovereign artifact
    INVOK3_HASH = "f33a886563848b32e098826742f1f4b3b2d126938d6175825595c2e88a005d76"

    # Path to the artifact within the project structure
    artifact_path = os.path.join(os.path.dirname(__file__), '..', 'acto-1', 'assets', 'invok3.jpeg')

    # Solidify and verify
    try:
        print(f"Verifying integrity of: {os.path.abspath(artifact_path)}")
        is_valid = verify_integrity(artifact_path, INVOK3_HASH)

        if is_valid:
            print("\nSOBERANIA VERIFICADA. EL ARTEFACTO ES AUTENTICO.")
            print(f"SHA-256: {INVOK3_HASH}")
            print("El sello digital es fuerte. La ceremonia puede continuar.")
        else:
            print("\nALERTA DE CORRUPCION. EL ARTEFACTO HA SIDO ALTERADO.")
            print(f"Expected Hash: {INVOK3_HASH}")
            print(f"Actual Hash:   {solidify_artifact(artifact_path)}")
            print("No proceda. La soberanía ha sido comprometida.")

    except FileNotFoundError as e:
        print(f"\nERROR: No se pudo encontrar el artefacto. {e}")
        print("La ceremonia no puede comenzar sin el objeto de poder.")
