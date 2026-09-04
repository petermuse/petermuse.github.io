import {
    Group,
    Mesh,
    MeshBasicMaterial,
    PlaneGeometry,
    SphereGeometry,
    Vector3
} from '../assets/vendor/three-local@0.128.0/build/three.module.js';
import { Line2 } from '../assets/vendor/three-local@0.128.0/examples/jsm/lines/Line2.js';
import { LineGeometry } from '../assets/vendor/three-local@0.128.0/examples/jsm/lines/LineGeometry.js';

/** Build the head and floating symbols with the scene's shared line material. */
export function createHeadGeometry(lineMaterial) {
    // Head geometry is separate from scene setup, input, and animation.
    const head = new Group();

    // Create an invisible sphere for raycasting
    const sphereRadius = 1.2; // Adjust if necessary
    const headRaycastGeometry = new SphereGeometry(sphereRadius, 16, 16); // Default segments are fine
    const headRaycastMaterial = new MeshBasicMaterial({ visible: false });
    const headRaycastTarget = new Mesh(headRaycastGeometry, headRaycastMaterial);
    headRaycastTarget.name = 'headRaycastTarget'; // Optional: for easier identification in logs
    head.add(headRaycastTarget);

    // Create face components
    const eyesGroup = new Group();
    head.add(eyesGroup);

    // Different eye states - windows to the digital soul
    const leftEyeOpen = createEye(-0.45, 'open');
    const rightEyeOpen = createEye(0.45, 'open');
    eyesGroup.add(leftEyeOpen);
    eyesGroup.add(rightEyeOpen);

    const leftEyeClosed = createEye(-0.45, 'closed');
    const rightEyeClosed = createEye(0.45, 'closed');
    leftEyeClosed.visible = false;
    rightEyeClosed.visible = false;
    eyesGroup.add(leftEyeClosed);
    eyesGroup.add(rightEyeClosed);

    // Different mouth states
    const normalMouth = createMouth('normal');
    const whistlingMouth = createMouth('whistling');
    const gigglingMouth = createMouth('giggling');
    const awedMouth = createMouth('awed');
    head.add(normalMouth);
    head.add(whistlingMouth);
    head.add(gigglingMouth);
    head.add(awedMouth);
    whistlingMouth.visible = false;
    gigglingMouth.visible = false;
    awedMouth.visible = false;

    // Create animation elements
    const zzzGroup = createZzzGroup();
    zzzGroup.visible = false;

    const musicNotesGroup = createMusicNotesGroup();
    musicNotesGroup.visible = false;

    // Create face outline and other facial features
    head.add(createFaceOutline());
    head.add(createNose());

    // After creating the eyebrows
    const eyebrows = createEyebrows();
    head.add(eyebrows);

    return {
        head,
        headRaycastTarget,
        eyesGroup,
        leftEyeOpen,
        rightEyeOpen,
        leftEyeClosed,
        rightEyeClosed,
        normalMouth,
        whistlingMouth,
        gigglingMouth,
        awedMouth,
        zzzGroup,
        musicNotesGroup,
        eyebrows,
        archEyebrows
    };

    // Function to create eye (different states)
    function createEye(xOffset, state) {
        const eye = new Group();
        eye.position.z = 1;

        if (state === 'open') {
            // Diamond eyes - eternal digital vigilance
            const outlinePoints = [
                new Vector3(xOffset - 0.2, 0.3, 0),
                new Vector3(xOffset, 0.4, 0),
                new Vector3(xOffset + 0.2, 0.3, 0),
                new Vector3(xOffset, 0.2, 0),
                new Vector3(xOffset - 0.2, 0.3, 0)
            ];

            const flattenedOutlinePoints = [];
            outlinePoints.forEach(p => flattenedOutlinePoints.push(p.x, p.y, p.z));
            const outlineGeometry = new LineGeometry();
            outlineGeometry.setPositions(flattenedOutlinePoints);
            const outline = new Line2(outlineGeometry, lineMaterial);
            outline.computeLineDistances();
            eye.add(outline);

            // Pupil - staring into your soul since 2024
            const pupilGeometry = new PlaneGeometry(0.05, 0.05);
            const pupilMaterial = new MeshBasicMaterial({ color: 0x00ff00 });
            const pupil = new Mesh(pupilGeometry, pupilMaterial);
            pupil.position.set(xOffset, 0.3, 0.1);
            eye.add(pupil);

        } else if (state === 'closed') {
            // Closed eyes - digital beauty sleep
            const points = [
                new Vector3(xOffset - 0.2, 0.3, 0),
                new Vector3(xOffset + 0.2, 0.3, 0)
            ];

            const flattenedPoints = [];
            points.forEach(p => flattenedPoints.push(p.x, p.y, p.z));
            const geometry = new LineGeometry();
            geometry.setPositions(flattenedPoints);
            const line = new Line2(geometry, lineMaterial);
            line.computeLineDistances();
            eye.add(line);
        }

        return eye;
    }

    // Function to create different mouth states
    function createMouth(type) {
        const mouth = new Group();
        mouth.position.z = 1;

        let points = [];
        if (type === 'normal') {
            // More pronounced smile with more points
            points = [
                new Vector3(-0.35, -0.45, 0),
                new Vector3(-0.2, -0.53, 0),
                new Vector3(0, -0.55, 0),
                new Vector3(0.2, -0.53, 0),
                new Vector3(0.35, -0.45, 0)
            ];
        } else if (type === 'whistling') {
            // Small "o" shape for whistling
            const segments = 16; // More segments for smoother circle
            const radius = 0.07; // Smaller lip radius

            for (let i = 0; i <= segments; i++) {
                const theta = (i / segments) * Math.PI * 2;
                points.push(new Vector3(
                    Math.cos(theta) * radius,
                    Math.sin(theta) * radius - 0.5, // Positioned slightly lower
                    0
                ));
            }
        } else if (type === 'awed') {
            // Slightly larger "o" shape for awed
            const segments = 18; // Smoother circle
            const radius = 0.12; // Larger radius than whistling

            for (let i = 0; i <= segments; i++) {
                const theta = (i / segments) * Math.PI * 2;
                points.push(new Vector3(
                    Math.cos(theta) * radius,
                    Math.sin(theta) * radius - 0.52, // Positioned slightly lower
                    0
                ));
            }
        } else if (type === 'giggling') {
            // Wide open laughing mouth - more exaggerated smile
            points = [
                new Vector3(-0.4, -0.4, 0),
                new Vector3(-0.25, -0.48, 0),
                new Vector3(0, -0.62, 0),  // Deeper in the middle
                new Vector3(0.25, -0.48, 0),
                new Vector3(0.4, -0.4, 0)
            ];
        }

        const flattenedPoints = [];
        points.forEach(p => flattenedPoints.push(p.x, p.y, p.z));
        const geometry = new LineGeometry();
        geometry.setPositions(flattenedPoints);
        const line = new Line2(geometry, lineMaterial);
        line.computeLineDistances();
        mouth.add(line);

        return mouth;
    }

    // Function to create face outline
    function createFaceOutline() {
        const points = [
            // Top center
            new Vector3(0, 1.4, 0),

            // Top right curve - more angular/stepped
            new Vector3(0.4, 1.35, 0),
            new Vector3(0.7, 1.2, 0),
            new Vector3(0.9, 1.0, 0),
            new Vector3(1.0, 0.8, 0),
            new Vector3(1.1, 0.5, 0),

            // Right side
            new Vector3(1.15, 0.2, 0),
            new Vector3(1.15, -0.1, 0),
            new Vector3(1.1, -0.3, 0),

            // Right jaw - more rounded
            new Vector3(1.0, -0.5, 0),
            new Vector3(0.8, -0.65, 0),
            new Vector3(0.5, -0.75, 0),

            // Bottom center - more rounded
            new Vector3(0.25, -0.8, 0),
            new Vector3(0, -0.82, 0),
            new Vector3(-0.25, -0.8, 0),

            // Left jaw - more rounded
            new Vector3(-0.5, -0.75, 0),
            new Vector3(-0.8, -0.65, 0),
            new Vector3(-1.0, -0.5, 0),

            // Left side
            new Vector3(-1.1, -0.3, 0),
            new Vector3(-1.15, -0.1, 0),
            new Vector3(-1.15, 0.2, 0),

            // Top left curve - more angular/stepped
            new Vector3(-1.1, 0.5, 0),
            new Vector3(-1.0, 0.8, 0),
            new Vector3(-0.9, 1.0, 0),
            new Vector3(-0.7, 1.2, 0),
            new Vector3(-0.4, 1.35, 0),

            // Back to top
            new Vector3(0, 1.4, 0)
        ];

        const flattenedPoints = [];
        points.forEach(p => flattenedPoints.push(p.x, p.y, p.z));
        const geometry = new LineGeometry();
        geometry.setPositions(flattenedPoints);
        const line = new Line2(geometry, lineMaterial);
        line.computeLineDistances();
        line.position.z = 0.6;

        return line;
    }

    // Function to create nose
    function createNose() {
        const noseGroup = new Group();

        // Vertical line
        const verticalPoints = [
            new Vector3(0, 0.1, 0),
            new Vector3(0, -0.15, 0)
        ];

        const flattenedVerticalPoints = [];
        verticalPoints.forEach(p => flattenedVerticalPoints.push(p.x, p.y, p.z));
        const verticalGeometry = new LineGeometry();
        verticalGeometry.setPositions(flattenedVerticalPoints);
        const verticalLine = new Line2(verticalGeometry, lineMaterial);
        verticalLine.computeLineDistances();
        noseGroup.add(verticalLine);

        // Horizontal part
        const horizontalPoints = [
            new Vector3(-0.1, -0.15, 0),
            new Vector3(0.1, -0.15, 0)
        ];

        const flattenedHorizontalPoints = [];
        horizontalPoints.forEach(p => flattenedHorizontalPoints.push(p.x, p.y, p.z));
        const horizontalGeometry = new LineGeometry();
        horizontalGeometry.setPositions(flattenedHorizontalPoints);
        const horizontalLine = new Line2(horizontalGeometry, lineMaterial);
        horizontalLine.computeLineDistances();
        noseGroup.add(horizontalLine);

        noseGroup.position.z = 1.2;

        return noseGroup;
    }


    // Function to create eyebrows
    function createEyebrows() {
        const eyebrowGroup = new Group();

        // Left eyebrow
        const leftEyebrowPoints = [
            new Vector3(-0.6, 0.5, 0),
            new Vector3(-0.3, 0.5, 0)
        ];

        const flattenedLeftEyebrowPoints = [];
        leftEyebrowPoints.forEach(p => flattenedLeftEyebrowPoints.push(p.x, p.y, p.z));
        const leftEyebrowGeometry = new LineGeometry();
        leftEyebrowGeometry.setPositions(flattenedLeftEyebrowPoints);
        const leftEyebrow = new Line2(leftEyebrowGeometry, lineMaterial);
        leftEyebrow.computeLineDistances();
        eyebrowGroup.add(leftEyebrow);

        // Right eyebrow
        const rightEyebrowPoints = [
            new Vector3(0.3, 0.5, 0),
            new Vector3(0.6, 0.5, 0)
        ];

        const flattenedRightEyebrowPoints = [];
        rightEyebrowPoints.forEach(p => flattenedRightEyebrowPoints.push(p.x, p.y, p.z));
        const rightEyebrowGeometry = new LineGeometry();
        rightEyebrowGeometry.setPositions(flattenedRightEyebrowPoints);
        const rightEyebrow = new Line2(rightEyebrowGeometry, lineMaterial);
        rightEyebrow.computeLineDistances();
        eyebrowGroup.add(rightEyebrow);

        eyebrowGroup.position.z = 1.1;


        return eyebrowGroup;
    }

    // Function to adjust eyebrow positions
    function archEyebrows(arched) {
        if (arched) {
            // Create elevated arched eyebrows for giggling or surprise
            eyebrows.children[0].position.y = 0.15; // Raise left eyebrow
            eyebrows.children[1].position.y = 0.15; // Raise right eyebrow
        } else {
            // Reset eyebrows to normal position
            eyebrows.children[0].position.y = 0;
            eyebrows.children[1].position.y = 0;
        }
    }

    // Function to create ZZZ group for sleeping animation
    function createZzzGroup() {
        const group = new Group();

        // Z character 1 (smallest)
        const z1 = createZCharacter(0.2);
        z1.position.set(0.1, 1.6, 0);
        z1.userData.originalY = 1.6;
        group.add(z1);

        // Z character 2 (medium)
        const z2 = createZCharacter(0.3);
        z2.position.set(0.3, 1.8, 0);
        z2.userData.originalY = 1.8;
        group.add(z2);

        // Z character 3 (largest)
        const z3 = createZCharacter(0.4);
        z3.position.set(0.5, 2.0, 0);
        z3.userData.originalY = 2.0;
        group.add(z3);

        return group;
    }

    // Function to create a Z character
    function createZCharacter(size) {
        const group = new Group();

        // Top line
        const topPoints = [
            new Vector3(-size / 2, size / 2, 0),
            new Vector3(size / 2, size / 2, 0)
        ];

        const flattenedTopPoints = [];
        topPoints.forEach(p => flattenedTopPoints.push(p.x, p.y, p.z));
        const topGeometry = new LineGeometry();
        topGeometry.setPositions(flattenedTopPoints);
        const topLine = new Line2(topGeometry, lineMaterial);
        topLine.computeLineDistances();
        group.add(topLine);

        // Diagonal line
        const diagPoints = [
            new Vector3(size / 2, size / 2, 0),
            new Vector3(-size / 2, -size / 2, 0)
        ];

        const flattenedDiagPoints = [];
        diagPoints.forEach(p => flattenedDiagPoints.push(p.x, p.y, p.z));
        const diagGeometry = new LineGeometry();
        diagGeometry.setPositions(flattenedDiagPoints);
        const diagLine = new Line2(diagGeometry, lineMaterial);
        diagLine.computeLineDistances();
        group.add(diagLine);

        // Bottom line
        const bottomPoints = [
            new Vector3(-size / 2, -size / 2, 0),
            new Vector3(size / 2, -size / 2, 0)
        ];

        const flattenedBottomPoints = [];
        bottomPoints.forEach(p => flattenedBottomPoints.push(p.x, p.y, p.z));
        const bottomGeometry = new LineGeometry();
        bottomGeometry.setPositions(flattenedBottomPoints);
        const bottomLine = new Line2(bottomGeometry, lineMaterial);
        bottomLine.computeLineDistances();
        group.add(bottomLine);

        return group;
    }

    // Function to create music notes group for whistling animation
    function createMusicNotesGroup() {
        const group = new Group();

        // Create different music note shapes
        const note1 = createEighthNote(0.15);
        note1.position.set(0.1, 1.5, 0);
        note1.userData.originalY = 1.5;
        note1.userData.originalX = 0.1;
        group.add(note1);

        const note2 = createQuarterNote(0.2);
        note2.position.set(0.25, 1.7, 0);
        note2.userData.originalY = 1.7;
        note2.userData.originalX = 0.25;
        group.add(note2);

        const note3 = createEighthNote(0.25);
        note3.position.set(0.4, 1.9, 0);
        note3.userData.originalY = 1.9;
        note3.userData.originalX = 0.4;
        group.add(note3);

        return group;
    }

    // Shared note base: creates note head (oval) + stem
    function createNoteBase(size) {
        const group = new Group();

        // Note head (oval)
        const headSegments = 8;
        const headPoints = [];
        for (let i = 0; i <= headSegments; i++) {
            const theta = (i / headSegments) * Math.PI * 2;
            headPoints.push(new Vector3(
                Math.cos(theta) * size * 0.4,
                Math.sin(theta) * size * 0.6,
                0
            ));
        }
        const flattenedHeadPoints = [];
        headPoints.forEach(p => flattenedHeadPoints.push(p.x, p.y, p.z));
        const headGeometry = new LineGeometry();
        headGeometry.setPositions(flattenedHeadPoints);
        const headLine = new Line2(headGeometry, lineMaterial);
        headLine.computeLineDistances();
        headLine.rotation.z = Math.PI / 4;
        group.add(headLine);

        // Note stem
        const stemPoints = [
            new Vector3(size * 0.25, size * 0.25, 0),
            new Vector3(size * 0.25, size * 1.5, 0)
        ];
        const flattenedStemPoints = [];
        stemPoints.forEach(p => flattenedStemPoints.push(p.x, p.y, p.z));
        const stemGeometry = new LineGeometry();
        stemGeometry.setPositions(flattenedStemPoints);
        const stem = new Line2(stemGeometry, lineMaterial);
        stem.computeLineDistances();
        group.add(stem);

        return group;
    }

    // Eighth note = base + flag
    function createEighthNote(size) {
        const group = createNoteBase(size);

        const flagPoints = [
            new Vector3(size * 0.25, size * 1.5, 0),
            new Vector3(size * 0.8, size * 1.2, 0)
        ];
        const flattenedFlagPoints = [];
        flagPoints.forEach(p => flattenedFlagPoints.push(p.x, p.y, p.z));
        const flagGeometry = new LineGeometry();
        flagGeometry.setPositions(flattenedFlagPoints);
        const flag = new Line2(flagGeometry, lineMaterial);
        flag.computeLineDistances();
        group.add(flag);

        return group;
    }

    // Quarter note = just the base (head + stem, no flag)
    function createQuarterNote(size) {
        return createNoteBase(size);
    }

}
