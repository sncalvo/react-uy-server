import { IoLogoWebComponent, IoPeopleOutline } from 'react-icons/io5';
import { BsFiletypeJsx } from 'react-icons/bs';
import { GiCheckboxTree } from 'react-icons/gi';
import { TbHandLittleFinger } from 'react-icons/tb';
import { SlScreenDesktop } from 'react-icons/sl';
import SectionWrapper from '@/components/molecules/SectionWrapper';
import clsx from 'clsx';

type FeatureProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  mobile?: boolean;
};

const Feature = ({ title, description, icon, mobile = false }: FeatureProps) => (
  <div
    className={clsx('group h-full flex-col items-center md:w-2/3 lg:flex', {
      flex: mobile,
      hidden: !mobile,
    })}
  >
    <div className="h-1/4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-800 text-white backdrop-blur-lg transition-all group-hover:bg-blue-700 dark:bg-gray-300 dark:text-gray-900">
        {icon}
      </div>
    </div>

    <div>
      <h3 className="mt-8 text-center text-xl font-bold text-gray-800 dark:text-gray-300">
        {title}
      </h3>
    </div>

    <div className="h-1/3">
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 lg:text-base">{description}</p>
    </div>
  </div>
);

const FirstSection = () => (
  <SectionWrapper left>
    <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100">¿Qué es ReactJS?</h1>
    <p className="mt-6 text-gray-600 dark:text-gray-400 md:px-24 xl:px-96">
      React JS es una biblioteca de JavaScript para construir interfaces de usuario interactivas y
      dinámicas para aplicaciones web. Fue desarrollado por Facebook y se ha convertido en una de
      las tecnologías más populares para el desarrollo de aplicaciones web modernas. React JS se
      enfoca en la construcción de componentes reutilizables que representan una porción de la
      interfaz de usuario.
    </p>

    <div className="mt-10 grid grid-cols-2 grid-rows-2 place-items-center gap-y-14 gap-x-5 pt-10 lg:grid-cols-3 lg:gap-x-10">
      <Feature
        title="Componentes"
        description="Estos componentes son como bloques de construcción que se pueden usar en diferentes partes de la aplicación"
        mobile
        icon={<IoLogoWebComponent className="h-8 w-8 text-gray-200" />}
      />

      <Feature
        title="JSX"
        description="sintaxis de marcado que permite a los desarrolladores escribir código HTML en JavaScript."
        icon={<BsFiletypeJsx className="h-8 w-8" />}
      />

      <Feature
        title="Virtual DOM"
        description="El Virtual DOM es una copia de la estructura de la interfaz de usuario en memoria."
        icon={<GiCheckboxTree className="h-8 w-8" />}
      />

      <Feature
        title="Fácil de aprender"
        description="Su sintaxis clara y su enfoque modular facilitan la creación"
        mobile
        icon={<TbHandLittleFinger className="h-8 w-8" />}
      />

      <Feature
        title="Gran comunidad"
        description="Hay una amplia gama de recursos disponibles, incluyendo documentación, tutoriales y librerías de terceros."
        mobile
        icon={<IoPeopleOutline className="h-8 w-8" />}
      />

      <Feature
        title="UI Focus"
        description="Proporciona una experiencia de usuario rápida y fluida mediante la actualización eficiente de la interfaz de usuario."
        mobile
        icon={<SlScreenDesktop className="h-8 w-8" />}
      />
    </div>
  </SectionWrapper>
);

export default FirstSection;
