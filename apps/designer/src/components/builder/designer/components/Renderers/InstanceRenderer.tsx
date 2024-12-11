import {MortarElementInstance} from '@repo/common/schema/instance'
import ComponentRenderer
    from "@/components/builder/designer/components/Renderers/ComponentRenderer.tsx";
import {MortarElement} from "@repo/common/schema/element";
import {MortarComponent} from "@repo/common/schema/component";

export default function InstanceRenderer({instance, activeElements, components}: {
    instance: MortarElementInstance;
    activeElements: MortarElement[];
    components: MortarComponent[];
}) {
    const componentToRender = components.find(comp => comp.id == instance.ref.split("::")[2])

    if (!componentToRender) {
        return <div className={'p-4 rounded-lg bg-red-100 text-red-600 flex'}>
            ERROR: Component not found
        </div>
    }

    return <>
        <ComponentRenderer
            component={componentToRender}
            instance={instance}
            activeElements={activeElements}
        />
    </>
}
