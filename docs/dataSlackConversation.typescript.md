# `dataSlackConversation` Submodule <a name="`dataSlackConversation` Submodule" id="@skeptools/provider-slack.dataSlackConversation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSlackConversation <a name="DataSlackConversation" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/d/conversation slack_conversation}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer"></a>

```typescript
import { dataSlackConversation } from '@skeptools/provider-slack'

new dataSlackConversation.DataSlackConversation(scope: Construct, id: string, config: DataSlackConversationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig">DataSlackConversationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig">DataSlackConversationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPurpose` <a name="resetPurpose" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetPurpose"></a>

```typescript
public resetPurpose(): void
```

##### `resetTopic` <a name="resetTopic" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetTopic"></a>

```typescript
public resetTopic(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.isConstruct"></a>

```typescript
import { dataSlackConversation } from '@skeptools/provider-slack'

dataSlackConversation.DataSlackConversation.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.created">created</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isArchived">isArchived</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isExtShared">isExtShared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isOrgShared">isOrgShared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isPrivate">isPrivate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isShared">isShared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.channelIdInput">channelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.purposeInput">purposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.channelId">channelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.topic">topic</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `created`<sup>Required</sup> <a name="created" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.created"></a>

```typescript
public readonly created: number;
```

- *Type:* number

---

##### `creator`<sup>Required</sup> <a name="creator" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `isArchived`<sup>Required</sup> <a name="isArchived" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isArchived"></a>

```typescript
public readonly isArchived: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isExtShared`<sup>Required</sup> <a name="isExtShared" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isExtShared"></a>

```typescript
public readonly isExtShared: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOrgShared`<sup>Required</sup> <a name="isOrgShared" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isOrgShared"></a>

```typescript
public readonly isOrgShared: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isPrivate`<sup>Required</sup> <a name="isPrivate" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isPrivate"></a>

```typescript
public readonly isPrivate: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isShared`<sup>Required</sup> <a name="isShared" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isShared"></a>

```typescript
public readonly isShared: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.channelIdInput"></a>

```typescript
public readonly channelIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.purposeInput"></a>

```typescript
public readonly purposeInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSlackConversationConfig <a name="DataSlackConversationConfig" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.Initializer"></a>

```typescript
import { dataSlackConversation } from '@skeptools/provider-slack'

const dataSlackConversationConfig: dataSlackConversation.DataSlackConversationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.channelId">channelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#channel_id DataSlackConversation#channel_id}. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#id DataSlackConversation#id}. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.purpose">purpose</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#purpose DataSlackConversation#purpose}. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.topic">topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#topic DataSlackConversation#topic}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#channel_id DataSlackConversation#channel_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#id DataSlackConversation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#purpose DataSlackConversation#purpose}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#topic DataSlackConversation#topic}.

---



