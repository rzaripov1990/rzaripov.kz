<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        id="timeline"
        :title="'Опыт работы'"
      >
        <v-timeline
          dense
        >
          <v-timeline-item
            v-for="(item, i) in orderedItems"
            :key="i"
            :icon="item.icon || ''"
            :class="{transparent: item.transparent}"
            large
          >
            <template
              v-if="item.iconImage"
              v-slot:icon
            >
              <v-avatar>
                <img
                  :src="publicPath(item.iconImage)"
                >
              </v-avatar>
            </template>
            <template v-slot:opposite />
            <v-layout>
              <v-flex
                v-if="$vuetify.breakpoint.smAndUp"
                md1
                sm2
                align-self-center
              >
                <span>{{ item.year }}</span>
              </v-flex>
              <v-flex
                md11
                sm10
                xs12
              >
                <v-card class="elevation-1">
                  <v-card-title class="pb-0">
                    <div>
                      <p v-if="$vuetify.breakpoint.xsOnly">
                        {{ item.year }}
                      </p>
                      <h3>{{ item.title }}</h3>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <v-layout wrap>
                      <v-flex
                        :md7="!!item.image"
                        :md12="!item.image"
                        xs12
                      >
                        <div class="mr-1">
                          <span
                            v-if="item.text"
                            class="pre"
                          >{{ item.text }}</span>
                          <!-- eslint-disable vue/no-v-html -->
                          <div
                            v-else-if="item.html"
                            v-html="item.html"
                          />
                          <!-- eslint-enable vue/no-v-html -->
                        </div>
                      </v-flex>
                      <v-flex
                        v-if="item.image"
                        md5
                        xs12
                      >
                        <div
                          class="mt-2"
                        >
                          <v-carousel
                            v-if="Array.isArray(item.image)"
                            :show-arrows="false"
                            :height="325"
                          >
                            <v-carousel-item
                              v-for="(citem,ci) in item.image"
                              :key="ci"
                              :src="publicPath(citem)"
                            />
                          </v-carousel>
                          <v-img
                            v-else
                            :max-height="item.imageHeight ? item.imageHeight : ''"
                            :src="publicPath(item.image)"
                          />
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'Timeline',
  components: { ContentSection },
  data      : () => ({
    detailed: true,
    items   : [
      {
        detailed   : true,
        transparent: false,
        year       : 'Октябрь 2020',
        title      : 'ТОО МФО "KMF (КМФ)"',
        html       : `
<strong>Менеджер управления</strong>
<p>Время покажет...</p>
`,
        icon: 'mdi-bank',
      },
      {
        detailed   : true,
        transparent: true,
        year       : 'Январь 2020 — Октябрь 2020',
        title      : 'ТОО МФО "KMF (КМФ)"',
        html       : `
<strong>Менеджер отдела</strong>

<p>Руководил отделом из 7 человек:</p>
<li>2 Android разрабочика (Android)</li>
<li>1 iOS разрабочик (Swift)</li>
<li>2 PHP разработчика (Laravel, Bitrix)</li>
<li>2 Backend разработчика (C#, Golang)</li>
<br>
<p>
Отдел занимался всеми онлайн продуктами (Full Online, Приложение для сотрудников, кредитный конвейер, платежные сервисы, корпоративный портал, личный кабинет и т.д.)
</p>
<p> Проводил daily meeting’и, выступал в роли scrum master’a контролировал сроки исполнения задач и сроки проектов. </p>
<p>Был инициатором и исполнителем внедрения CI/CD процессов для автоматической доставки приложении на тестирование.</p>
<p>Внедрял микросервисную архитектуру, docker, Linux-based ОС для серверов </p>
`,
        icon: 'mdi-bank',
      },
      {
        detailed   : true,
        transparent: true,
        year       : 'Май 2017 — Январь 2020',
        title      : 'ТОО МФО "KMF (КМФ)"',
        html       : `
<strong>Главный разработчик</strong>
<li> Разработка API для мобильных и веб приложении на PHP 7+</li>
<li> Firebase Cloud Messaging</li>
<li> JWT</li>
<li> RESTfull API</li>
<li> PHRoute</li>
<li> Разработка функционала по формированию pdf для договоров, согласии, чеков</li>
<li> Разработка модуля для работы с ЭЦП на стороне сервера (НУЦ РК)</li>
<li> Разработка приложении под платформу Android</li>
<li> Kotlin</li>
<li> Coroutine</li>
<li> Retrofit</li>
<li> 21-28 API</li>
<li> SMS Retriever</li>
<li> Firebase </li>
<li> Push</li>
<li> Analytics</li>
<li> LogEvents</li>
<li> Google Map</li>
<li> Работа с геолокацией, определение координат</li>
<br>
<br>
<p>Хорошие знания Microsoft SQL Server 2016+, Firebird 2.5/3.0</p>
<li> Создание Баз данных</li>
<li> Написание серверных процедур, табличных/скалярных функции</li>
<li> Создание связанных серверов к Firebird и SQL Server</li>
<li> Предоставление прав на процедуры/функции</li>
<li> Доработка SSIS пакетов</li>
<li> Небольшой опыт в администрировании ALWAYS ON, понимание как работает read/write сервера, репликации, блокировки</li>

<p>Занимался разработкой и поддержкой:</p>
<li> информационных систем</li>
<li> web сервисов</li>
<li> мобильного приложения на Андроид</li>
<li> внутрикорпоративных веб-порталов</li>
<li> автоматизация рутинных процессов</li>
<li> автоматизация работы call-центра</li>
<li> интеграции с внешними системами (платежными системами, 1С, Active Directory, JIRA и т.д. через SOAP и REST)</li>
<br>
<br>
<p>Также составлял документацию для внутренних сервисов и внешних интеграторов</p>
<p>Имею навыки администрирования</p>
<li> Linux серверов </li>
<li> Microsoft SQL Server </li>
<li> продуктов компании Atlassian (JIRA, Bitbucket, Confluence) </li>
<li> Firebase console </li>
<li> AppStore Connect </li>
`,
        icon: 'mdi-bank',
      },
      {
        detailed   : true,
        transparent: true,
        year       : 'Июнь 2016 — Май 2017',
        title      : 'rzaripov.kz',
        html       : `
<p>Разработка кросс-платформенных приложения под Android, iOS, Windows, MacOS на FireMonkey</p>

<a href="http://fire-monkey.ru/profile/59-zuby/">Профиль</a> на русско-язычном форуме по FireMonkey
<br>
<a href="https://github.com/rzaripov1990/">Модули и решения для FireMonkey</a>
<br>
<br>
<strong><p>[ freelance проекты ]</p></strong>
<li>Интернет дома - первый андроид клиент для абонентов услуги Интернет Дома</li>
<li>Smart-Lift - первый андроид клиент для пользователей услуги http://smart-lift.kz</li>
<li>Viki.bar - онлайн-магазин</li>
<li>Новости Донбасса</li>
<li>Победа26</li>`,
        icon: 'mdi-web',
      },
      {
        detailed   : true,
        year       : 'Июнь 2015 — Май 2017',
        transparent: true,
        title      : 'ТОО "Vbaze Technologies"',
        html       : `
разработка программного обеспечения (e-commerce)
<li> организация архитектуры проекта </li>
<li> разработка собственных модулей, библиотек, компонентов для Delphi </li>
<li> бэкенд разработка (API на PHP) </li>
<li> знание MySQL, вложенные запросы, триггеры и прочее </li>
<li> платежные системы (работа с API) </li>
<li> написание демона для Linux(Ubuntu) на lazarus </li>
        `,
        icon: 'mdi-apps',
      },
    ],
  }),
  computed: {
    orderedItems () {
      const items = [...this.items]
      if (this.detailed)
        return items
      return items.filter((item) => {
        return !item.detailed
      })
    },
  },
}
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.pre {
  white-space: pre;
}
.transparent{
  opacity: 0.6;
}
</style>
